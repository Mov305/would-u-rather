import React from 'react'
import { Box, Heading, Button, Flex } from '@chakra-ui/react'
import QCard from './QCard'
import {connect} from 'react-redux'

function DashBoard(props) {
    
    React.useEffect(() => {
       const U=()=> setTimeout(()=>handleUnA(),100)
       
       U();
      }, [props.qIds])// eslint-disable-line react-hooks/exhaustive-deps

    const {questions,authedUser}=props
    const [ids,setIds]=React.useState()
   
    
    
    const handleAnswered =()=>{     
        const aIds = props.qIds.filter((id)=>
            questions[id].optionOne.votes.includes(authedUser)||questions[id].optionTwo.votes.includes(authedUser)
        )
        setIds(aIds)
    }
    const handleUnA=()=>{
        const aIds = props.qIds.filter((id)=>
            !questions[id].optionOne.votes.includes(authedUser)&&!questions[id].optionTwo.votes.includes(authedUser)
        )
        setIds(aIds)
        return aIds
    }

    const all =()=>{
        setIds(props.qIds)
    }
    
    
    return (
        <Flex pos='relative'>
        
            <Flex m={4}  borderLeft='1px' borderLeftColor='green.100' rounded='md' direction='column'   width="20%" style={{background:'rgba(250,250,250,0.7)'}}>
                <Heading size='lg'  p={6}  > CATEGORIES </Heading>
                <Button onClick={()=>all()} isFullWidth={true} borderTop='1px' borderTopColor='green.100'  variant='ghost' size='md' colorScheme='teal'> TimeLine </Button>
                <Button onClick={()=>handleAnswered()} isFullWidth={true} borderTop='1px' borderTopColor='green.100' variant='ghost' size='md' colorScheme='teal'>Answered Q</Button>
                <Button onClick={()=>handleUnA()} isFullWidth={true} borderTop='1px' borderTopColor='green.100' variant='ghost' size='md' colorScheme='teal'>UnAnswered Q</Button>
            </Flex>
              
            <Box width='70%' pos='absolute' left='30%'>
                {ids ?
                 ids.map((qId)=><QCard id={qId} key={qId}></QCard>):
                 props.qIds.map((qId)=><QCard id={qId} key={qId}></QCard>)}
                
                
            </Box>
        </Flex>

    )
}

export default connect(({questions,authedUser})=>({
    qIds:Object.keys(questions).sort((a,b)=>questions[b].timestamp-questions[a].timestamp),
    authedUser,
    questions
}))(DashBoard) 
