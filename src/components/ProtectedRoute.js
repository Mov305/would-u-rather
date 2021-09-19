import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
const ProtectedRoute=({component:Component,location,user,...rest})=> {
    
    

    return (
 
            <Route exact {...rest} render={
                props=>{
                    if (user){
                        
                        return <Component {...props}/>
                    }else{
                        return <Redirect 
                        to={{
                            pathname: '/sign',
                            state: { id: location.pathname }
                        }}
                        ></Redirect>
                    }
                }
                
            }/>
    )
}

export default withRouter(connect(({authedUser})=>({
    user:authedUser
}))(ProtectedRoute))