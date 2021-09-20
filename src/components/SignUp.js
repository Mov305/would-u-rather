import React from 'react'
import {connect} from 'react-redux'
import { Box, Flex, Heading, Button, Select } from '@chakra-ui/react'
import { SiReactos } from 'react-icons/si'
import {handleSetUser} from '../actions/authedUser'
import { withRouter } from 'react-router'

function SignUp(props) {
    
    

    const handleDirection=()=>{
        props.dispatch(handleSetUser(React.sel.value))
        const path = props.location.state ?props.location.state.id:'/'
        props.history.push(path)
       
        
    }

    return (
        <Box width='100%' align='center' p={5} my={5} fontSize={['sm','md']} >
            <Flex align='center' direction='column' width='70%' style={{ background: 'rgba(250,250,250,0.7)' }} shadow='xl'>
                <Heading m={5}>Sign Up</Heading>
                <Box fontSize='9xl' color='twitter.700' m={5}  ><SiReactos /></Box>
                <Select placeholder="Select option" m={5} width='90%' variant='filled' ref={(sel)=>React.sel=sel}>
                    {props.names&&props.names.map((name)=><option value={name} key={name}>{name}</option>)}
                </Select>
                <Button onClick={()=>handleDirection()} colorScheme='teal' variant='solid' rounded='full' size='lg' width={['50%','50%','sm']} m={5}>LogIN</Button>
            </Flex>
        </Box>
    )
}

export default withRouter(connect(({users})=>({
       names:Object.keys(users)
}))(SignUp))
