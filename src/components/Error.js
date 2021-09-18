import React from 'react'
import {Box,Flex,Heading,Badge} from '@chakra-ui/react'
import {GiSadCrab} from 'react-icons/gi'

function ErrorPage() {
    return (
        <Box width='100%' align='center' p={5} m={5}>
            <Flex align='center' direction='column' width='70%' style={{ background: 'rgba(250,250,250,0.7)' }} shadow='xl'>
                <Heading m={5}>Error </Heading>

                <Box fontSize='9xl' color='red.600' m={5} ><GiSadCrab /></Box>
                <Badge fontSize='3xl' m={5} colorScheme="teal" rounded='full'>Check the URl and try again</Badge>
                
                
            </Flex>
        </Box>
    )
}

export default ErrorPage
