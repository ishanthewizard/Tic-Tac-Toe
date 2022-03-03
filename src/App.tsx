import React, {useState} from 'react';
import { ChakraProvider, Text, Box, Button, Center /* Text, Link, VStack, Code, Grid, theme*/ } from '@chakra-ui/react';
import theme from './theme'
import Header from './Components/Header'
import Board from './Components/Board'
import {useLocalStorage} from './utils'


export function App() {

  const [player, setPlayer] = useState<string>("X")
  const [score, setScore] = useLocalStorage("setScore")
  const [gameFinished, setgameFinished] = useState<boolean>(false);
  const [whoWon, setWhoWon] = useState<string>("Player 1 Won!")
  const [headColor, setHeadColor] = useState<string>('white');
  return <ChakraProvider theme= {theme}>
    <Header player = {player} score = {score} gameFinished = {gameFinished}/>

    {gameFinished? 
    <Box>
       <Center>
       <Text className = 'work' color = {headColor} >{whoWon}</Text>
      </Center>
      <br/>
      <Center>
        <Button backgroundColor =  '#262A3F'height = '100px' width = '444px' boxShadow= 'lg' borderRadius = "30px" onMouseUp= {()=>(setgameFinished(false))}><Text className = 'button'>Play Again!</Text></Button>
      </Center>
      <Center>
      <Text onClick = {() => {setScore({x: 0, o:0});}} mt = {3} as = 'u' _hover={{ fontWeight: 'semibold', cursor: 'pointer' }}>Reset Score</Text>
      </Center>
    </Box>

      

    
    :
          <Board player= {player} 
          setPlayer = {setPlayer} 
          score = {score}
          setScore = {setScore}
          setgameFinished = {setgameFinished}
          setWhoWon = {setWhoWon}
          setHeadColor = {setHeadColor} /> 
    
    }

  </ChakraProvider>
}
