import * as React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Tile from './Tile'
function Board() {
    
    function genTiles(n : number) {
        const result : (JSX.Element)[] = [];
        for(let i = 0; i < n; i++) {
            result.push(<Tile num = {i}/>);
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