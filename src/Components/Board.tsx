import React, {useState} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Tile from './Tile'
function arrayEquals(a: number[], b: number[]) {
    let total = 0;
    a.forEach((aItem) => {
        b.forEach((bItem) => {
             (aItem === bItem? total += 1:null)
        })
    })
    if (total >= 3) {
        return true;
    }
    return false;
  }


  
function Board(props: any) {
    
    
    const [mark, setMark] = useState<string[]>(["","","","","","","","",""])
    function changeHeaderColor() {
        if (props.player === "X") {
            props.setHeadColor('#c08de9')
        } else if (props.player === "O") {
            props.setHeadColor('#517ae4')
        } else {
            props.setHeadColor('white')
        }
    }
    function checkWinner(newArr: string[]) {
        const result: number[] = [];
        for (let i = 0; i < mark.length; i++) {
            if (newArr[i] === props.player) {
                result.push(i)
            }
        }
        const winners: number[][] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for (const winner of winners) {
            if (arrayEquals(winner, result)) {
                changeHeaderColor()
                props.setWhoWon("Player " + (props.player === "X"? 1:2) +  " Won!")
                return 1;
                
            }
        }
        let tie = true;
        for (const item of newArr) {
            if (item === "") {
                tie = false;
                break;
            }
        }
        if (tie) {
            props.setWhoWon("It was a tie!")
            props.setPlayer("/")
            return -1;
        }
        return 0;
    }

    function updateMark(num: number) {
        const newArr = [...mark]
        if (mark[num] != "") {
            return;
        }
        newArr[num] = props.player
        setMark(newArr)
        const winner = checkWinner(newArr);
        if (winner) {
            console.log(winner);
            setTimeout(()=>{
                props.setgameFinished(true);
                setMark(["","","","","","","","",""])
            
            if (props.player === "X" && winner === 1) {
                props.setScore({x:props.score.x + 1, o: props.score.o})
            } else if (props.player === "O" && winner === 1) {
                props.setScore({x: props.score.x, o: props.score.o + 1})
            }
            props.setPlayer("X")
        }, 500)
        }
        else {
            props.setPlayer(props.player === "X"? "O":"X")
        }
        
        
    }


    function genTiles(n : number) {
        const result : (JSX.Element)[] = [];
        for(let i = 0; i < n; i++) {
            result.push(<Tile num = {i} key = {i} update = {updateMark} mark= {mark[i]} player= {props.player}/>);
        }
        return result;
    }
    const tileArray: (JSX.Element)[] = genTiles(9);
    return (
        <Box className = "board">
            <Flex justify= "center" wrap= "wrap">
                {tileArray}
            </Flex>


        </Box>
    )
}

export default Board;