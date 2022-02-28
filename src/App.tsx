import * as React from 'react';
import { ChakraProvider, /*Box, Text, Link, VStack, Code, Grid, theme*/ } from '@chakra-ui/react';
import theme from './theme'
import Header from './Components/Header'
import Board from './Components/Board'

export const App = () => (
  <ChakraProvider theme= {theme}>
    <Header/>
    <Board/>
  </ChakraProvider>
);
