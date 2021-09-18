import { Box, Flex, Avatar, Text, Badge, Heading, Button, Tag } from '@chakra-ui/react'
import React from 'react'
import { FaVoteYea } from 'react-icons/fa'
import { connect } from 'react-redux'
import { handleAddA } from '../actions/ques'
import { withRouter } from 'react-router'

function QCard(props) {
    const { name } = props.user ? props.user : 'undifined'
    const { avatarURL } = props.user ? props.user : "https://bit.ly/sage-adebayo"
    const { optionOne } = props.ques ? props.ques : 'not difined'
    const { optionTwo } = props.ques ? props.ques : 'not difined'
    
    const handleAnswer = (option)=>{
        const {id} = props
         props.dispatch(handleAddA({answer:option,qid:id}))
    }

    const handleOption1=()=>{
        return (optionOne.votes.includes(props.author))
    }
    const handleOption2=()=>{
        return (optionTwo.votes.includes(props.author))
    }
    
    const handleCard=()=>{
        props.history.push(`/Cards/${props.id}`)
    }

    if (name && optionOne && optionTwo && avatarURL) {

        const v1= optionOne.votes.length;
        const v2= optionTwo.votes.length;
   
        
        return (
            <Flex 
             onClick={()=>handleCard()}
             align="flex-start"
             direction='column' width='70%' boxShadow="md"
             p="6" rounded="md" bg="white" border="1px"
              borderColor='whatsapp.200' m={7} bgColor='white'>
                <Flex width="100%">
                    <Avatar src={avatarURL} />
                    <Box ml="3">
                        <Text fontWeight="bold">
                            {name}
                            <Badge ml="1" colorScheme="green">
                                New
                            </Badge>
                        </Text>
                        <Text fontSize="sm">UI Engineer</Text>
                    </Box>
                </Flex>


                <Heading size="md" my={4}>Would You Rather</Heading>
                <Box my={1} width="100%"  pos='relative'>
                <Box pos='absolute' width={(v1/(v2+v1))*100+'%'} height='full' rounded='lg' display={(handleOption1() || handleOption2())?['flex']:['none'] }  bg='whatsapp.600'><Tag size="lg" bgColor='transparent'>{(v1/(v2+v1))*100+'%'}</Tag></Box>
                    <Button disabled={handleOption1() || handleOption2()}
                     size="md" isFullWidth={true} 
                     height={handleOption1()? 28 : 14}
                      variant='outline'  bg={handleOption1()&&'whatsapp.500'}
                       onClick={()=>handleAnswer('optionOne')} >
                           
                        {optionOne.text}
                    </Button>
                    
                </Box>
                <Box my={1} width="100%" pos='relative'>
                <Box pos='absolute' width={(v2/(v2+v1))*100+'%'} height='full' rounded='lg' display={(handleOption1() || handleOption2())?['flex']:['none'] }  bg='whatsapp.600'><Tag size="lg" bgColor='transparent'>{(v2/(v2+v1))*100+'%'}</Tag></Box>

                    <Button disabled={handleOption1() || handleOption2()}
                     size="md" isFullWidth={true} 
                     height={handleOption2()? 28 : 14} pos='relative'
                      variant='outline' bg={handleOption2()&&'whatsapp.500'}
                       onClick={()=>handleAnswer('optionTwo')}>
                           
                        {optionTwo.text}
                    </Button>
                </Box>
                <Box borderTop='1px' borderColor='gray.200' width='100%'>
                    <Flex direction='row' p={3}>
                        <Tag size="lg" colorScheme='whatsapp' borderRadius="full">
                            <FaVoteYea style={{ fontSize: '2em', marginRight: '7px' }} />
                            <span>{(optionOne.votes.length + optionTwo.votes.length) ? (optionOne.votes.length + optionTwo.votes.length) : ''}</span>
                        </Tag>
                    </Flex>
                </Box>





            </Flex>
        )
    }
    else { return (<div></div>) }
}

export default withRouter(connect(({ questions, users,authedUser }, { id }) => ({
    ques: questions[id],
    user: users[questions[id].author],
    author:authedUser
}))(QCard))
