import * as React from 'react';
import {Square, Text} from '@chakra-ui/react';
function Tile() {
    return (
        <Square bg='#626887' size='220px' className = "tile">
                <Text>Box 2</Text>
        </Square>
    )
}

export default Tile;