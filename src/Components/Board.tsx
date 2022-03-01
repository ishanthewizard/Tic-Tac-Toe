import React, {useState} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Tile from './Tile'
function arrayEquals(a: number[], b: number[]) {
    let total = 0;
    for(const aItem of a) {
        for(const bItem of b) {
            if (aItem=== bItem) {
                total += 1;
            }
        }
    }
    if (total >= 3) {
        return true
    }
    return false
  }

  
function Board(props: any) {
    
    
    const [mark, setMark] = useState<string[]>(["","","","","","","","",""])

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
                props.setWhoWon("Player " + (props.player === "X"? 1:2) +  " won")
                return true;
                
            }
        }
        return false;
    }

    function updateMark(num: number) {
        const newArr = [...mark]
        if (mark[num] === "") {
            newArr[num] = props.player
            setMark(newArr)
        }
        if (checkWinner(newArr)) {
            setTimeout(()=>{
                props.setWon(true);
                setMark(["","","","","","","","",""])
            if (props.player === "X") {
                props.setP1Score(props.p1Score + 1)
            } else {
                props.setP2Score(props.p2Score + 1)
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