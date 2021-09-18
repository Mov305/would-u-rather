import React from 'react'
import {connect}from 'react-redux'
import {
  Box, Heading,  Spacer, Flex, Text, Avatar, Badge,
} from '@chakra-ui/react'
import SideMenu from './Drawer'
import Navs from './NavCom'
import Logs from './Logs'


function NavBar(props) {


  return (
    <Box width='100%' style={{background:'rgba(250,250,250,0.7)'}}>
      <Box p="3" display={['none', 'none', 'flex', 'flex']}>
        <Heading size="lg">Would You Rather App</Heading>
      </Box>
      <Flex borderBottom='1px' borderColor="Menu" boxShadow="base" >
        <Flex align='flex-end' m='3' display={props.authedUser?['flex']:['none']} >
          <Avatar name={props.user?props.user.name:'undefined'} src={props.user?props.user.avatarURL:''} />
          <Box ml="3">
            <Text fontWeight="bold">
              {props.user?props.user.name:'undefined'}
              <Badge ml="1" colorScheme="green">
                New
              </Badge>
            </Text>
            <Text fontSize="sm">UI Engineer</Text>
          </Box>


        </Flex>

        <Flex justifyContent='center' grow='10' align='flex-end' display={['none', 'none', 'none', 'flex']} >
          <Navs/>
        </Flex>
        <Spacer />

        <Flex display={['none', 'none', 'none', 'flex']} m={4}>
          <Logs/>
        </Flex>
        <Flex display={['flex', 'flex', 'flex', 'none']}>
          <SideMenu />
        </Flex>


      </Flex>


    </Box>



  )
}

export default connect(({authedUser,users})=>({
  authedUser,
  user:users[authedUser]
}))(NavBar)
