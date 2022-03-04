import React, {useState} from 'react';
import {Square, Text} from '@chakra-ui/react';



function Tile(props: any) {

    const [color, setColor] = useState<string>("#626887")
    return (
        <Square onMouseDown={() =>(setColor('gray'))}
        onMouseUp = {() =>(setColor('#626887'))}
        onClick = {() => {
            props.update(props.num)
            } } bg = {color} size='220px' className = "tile">
                <Text className = "marks" color = {props.mark === "X"? '#c08de9': '#517ae4' }>{props.mark}</Text>
        </Square>
    )
}

export default Tile;