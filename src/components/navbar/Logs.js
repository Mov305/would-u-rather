import {Button} from '@chakra-ui/react'
import React from 'react'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'
import { handleSetUser } from '../../actions/authedUser'


 const Logs=(props)=>{

  const logOut =()=>{
    props.dispatch(handleSetUser(null))
  }

  if(props.authedUser){
    return (
    <Button colorScheme="teal" variant="solid" onClick={()=>logOut()} >
    Logout
  </Button>)
  }else {return <div></div>}
}

  export default  withRouter(
    connect(({authedUser})=>({
      authedUser
    }))(Logs)
  )