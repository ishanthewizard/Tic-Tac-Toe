import * as React from 'react';
import {Square, Text} from '@chakra-ui/react';

interface Props {
    num: number;
}

function Tile({num}: Props) {
    console.log(num)
    return (
        <Square bg='#626887' size='220px' className = "tile">
                <Text>Box 2</Text>
        </Square>
    )
}

export default Tile;