import React from 'react'
import { Button, Box, Stack, Input, Heading, } from '@chakra-ui/react'
import {connect } from 'react-redux'
import { handleAddQ } from '../actions/ques'
import { withRouter } from 'react-router'

function NewQ(props) {
    const [options,setOptions]=React.useState({optionOne:'',optionTwo:''})
    
    const handleInput=()=>{
        setOptions(()=>{
            return {
                optionOne:React.option1.value,
                optionTwo:React.option2.value
            }
        })

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const question ={
            optionOneText:options.optionOne,
            optionTwoText:options.optionTwo, 
        }
        props.dispatch(handleAddQ(question))
        setOptions({optionOne:'',optionTwo:''})
        props.history.push('/')
        
    }

    return (
        <Box align='center' fontSize={['sm','md']}  >          
            <Stack spacing={3} align='flex-start' width='70%' shadow='xl' p={5} m={5} rounded='xl' bgColor='white' >
            <Heading > Would you rather</Heading>
                <Input focusBorderColor="lime" value={options.optionOne}  onChange={()=>handleInput()} ref={(option1)=>{React.option1=option1}} />
                <Heading>OR</Heading>
                <Input focusBorderColor="lime" value={options.optionTwo}  onChange={()=>handleInput()}  ref={(option2)=>{React.option2=option2}} />
                <Box width='100%' align='center'>
                <Button colorScheme='teal' variant='outline'rounded='3xl' onClick={(e)=>handleSubmit(e)} >Submit</Button>
                </Box>
                
            </Stack>
            
        </Box>
     )
}

export default withRouter(connect()(NewQ))
