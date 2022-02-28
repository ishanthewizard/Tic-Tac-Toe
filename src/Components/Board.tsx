import * as React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Tile from './Tile'
function Board() {
    return (
        <Box className = "board">
            <Flex justify= "center" wrap= "wrap">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </Flex>


        </Box>
    )
}

export default Board;