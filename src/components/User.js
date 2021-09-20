import React from 'react'
import { VStack, StackDivider, Box, Text, Badge, Flex, Avatar, Progress } from '@chakra-ui/react'
import { RiMedalLine } from 'react-icons/ri'
import {connect} from 'react-redux'

function User(props) {
    return (
        <VStack
            width='70%' fontSize={['sm','md']}
            divider={<StackDivider borderColor="gray.200" />}
            m={5}
            rounded='2xl'
            shadow='2xl'
            p={5}
            spacing={8}
            align="flex-start"
            style={{ background: 'rgba(250,250,250,0.9)' }}
        >
            <Box width='100%'>
                
                <Flex width='100%'>
                    <Flex width="215px">
                    <Badge m="1" colorScheme="green" fontSize='xl'>
                        <RiMedalLine />#{props.index}
                    </Badge>
                    <Avatar name={props.name} src={props.avatarUrl} />
                    <Box ml="3">
                        <Text fontWeight="bold">
                            {props.name}
                            <Badge ml="1" colorScheme="green">
                                New
                            </Badge>
                        </Text>
                        <Text fontSize="sm">UI Engineer</Text>
                    </Box>
                    </Flex>
                    
                    <Flex width='60%' height='100%'  >
                        <Progress width={props.points<10?`${8*props.points}%`:`${6*props.points}%`} m={5} size="md" isIndeterminate display={['none','none','flex','flex']} />
                        <Badge m={3} colorScheme="blue" fontSize='lg' rounded='lg'>{props.points}</Badge>
                    </Flex>
                </Flex>
            </Box>


        </VStack>


    )
}

export default connect(
    ({users} ,{id})=>{
       return{
           points:(Object.keys(users[id].answers).length+Object.keys(users[id].questions).length),
           name:users[id].name,
           avatarUrl:users[id].avatarURL
       }
    }
)(User) 
