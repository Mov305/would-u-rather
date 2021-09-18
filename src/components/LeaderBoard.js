import React from 'react'
import {Box} from '@chakra-ui/react'
import User from './User'
import { connect } from 'react-redux'


function LeaderBoard(props) {
    
    return (
        
        <Box align='center'>
          {props.id && props.id.map((id,index)=>
          <User key={id} id={id} index={index+1} />
          )}
         
        </Box>
    )
}

export default connect(
    ({users})=>{
      const usersId= Object.keys(users).sort((b,a)=>(Object.keys(users[a].answers).length+Object.keys(users[a].questions).length)-(Object.keys(users[b].answers).length+Object.keys(users[b].questions).length))
      return {id:usersId}
    }
)(LeaderBoard)
