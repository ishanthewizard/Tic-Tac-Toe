import React, {useState} from 'react';
import { ChakraProvider, Text, Box, Button, Center /* Text, Link, VStack, Code, Grid, theme*/ } from '@chakra-ui/react';
import theme from './theme'
import Header from './Components/Header'
import Board from './Components/Board'
function returnInitialState(storageKey: string) {
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(storageKey);
    // Parse stored json or if none return an empty object
    return item ? JSON.parse(item) : 0;
  } catch (error) {
    // If error also return an empty object
    console.log(error);
    return 0;
  }
}

function useLocalStorage(storageKey: string) {
  const [storedValue, setStoredValue] = useState(
    returnInitialState(storageKey)
  );
  
  const setValue = (value: any) => {
    try {
    // Allow value to be a function so we have same API as useState
      const valueToStore =
      value instanceof Function ? value(storedValue) : value;
      // Save to local storage
      window.localStorage.setItem(storageKey, JSON.stringify(valueToStore));
      // Save state
      setStoredValue(valueToStore);
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  
  return [storedValue, setValue]
}
export function App() {

  const [player, setPlayer] = useState<string>("X")
  const [p1Score, setP1Score] = useLocalStorage("setP1Score")
  const [p2Score, setP2Score] = useLocalStorage("setP2Score")
  const [won, setWon] = useState<boolean>(false);
  const [whoWon, setWhoWon] = useState<string>("Player 1 Won!")
  const [headColor, setHeadColor] = useState<string>('white');
  return <ChakraProvider theme= {theme}>
    <Header player = {player} p1Score = {p1Score} p2Score = {p2Score} won = {won}/>

    {won? 
    <Box>
       <Center>
       <Text className = 'work' color = {headColor} >{whoWon}</Text>
      </Center>
      <br/>
      <Center>
        <Button backgroundColor =  '#262A3F'height = '100px' width = '444px' boxShadow= 'lg' borderRadius = "30px" onMouseUp= {()=>(setWon(false))}><Text className = 'button'>Play Again!</Text></Button>
      </Center>
      <Center>
      <Text onClick = {() => {setP1Score(0); setP2Score(0);}} mt = {3} as = 'u' _hover={{ fontWeight: 'semibold', cursor: 'pointer' }}>Reset Score</Text>
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
          setWhoWon = {setWhoWon}
          setHeadColor = {setHeadColor} /> 
    
    }

  </ChakraProvider>
}
