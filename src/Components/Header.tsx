import * as React from 'react';
import {Heading, Center, Text} from '@chakra-ui/react'
function Header(props: any) {
    return (
        <Heading className = "header">
            <Center className = "player-stats score" >
            <Text className= 'purple' >{props.score.x } </Text> <Text color= 'gray' ml = {5} mr = {5}> - </Text> <Text className = 'blue'> { props.score.o}</Text>
             
            </Center>
            {!props.gameFinished? 
                (<Center className = 'player-stats playing' color= {props.player === "X"? '#c08de9':'#517ae4'}>
                Player {props.player === "X"? 1:2}
                </Center>): <Heading></Heading>
            }
        </Heading>
    )
}

export default Header;