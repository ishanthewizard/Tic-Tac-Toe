import React, {useState} from 'react';
import { ChakraProvider, Heading, Box, Button, Center /* Text, Link, VStack, Code, Grid, theme*/ } from '@chakra-ui/react';
import theme from './theme'
import Header from './Components/Header'
import Board from './Components/Board'
export function App() {
  const [player, setPlayer] = useState<string>("X")
  const [p1Score, setP1Score] = useState<number>(0);
  const [p2Score, setP2Score] = useState<number>(0);
  const [won, setWon] = useState<boolean>(false);
  const [whoWon, setWhoWon] = useState<string>("Player 1 Won")
  return <ChakraProvider theme= {theme}>
    <Header player = {player} p1Score = {p1Score} p2Score = {p2Score} won = {won}/>

    {won? 
    <Box>
       <Center>
       <Heading>{whoWon}</Heading>
      </Center>
      <br/>
      <Center>
        <Button onMouseUp= {()=>(setWon(false))}>New Game</Button>
      </Center>
    </Box>

      

    
    :
          <Board player= {player} 
          setPlayer = {setPlayer} 
          p1Score = {p1Score} 
          p2Score = {p2Score}
          setP1Score ={setP1Score} 
          setP2Score ={setP2Score}
          setWon = {setWon}
          setWhoWon = {setWhoWon} /> 
    
    }

  </ChakraProvider>
}
