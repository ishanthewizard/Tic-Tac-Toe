import * as React from 'react';
import {Heading, Center} from '@chakra-ui/react'
function Header(props: any) {
    return (
        <Heading className = "header">
            <Center>
            {props.p1Score} - {props.p2Score}
            </Center>
            {!props.won? 
                (<Center>
                Player {props.player === "X"? 1:2}
                </Center>): <Heading></Heading>
        
        
            }


            
        </Heading>
    )
}

export default Header;