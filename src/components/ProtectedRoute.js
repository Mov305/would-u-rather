import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const ProtectedRoute=({component:Component,user,...rest})=> {
    

    return (

            <Route exact {...rest} render={
                props=>{
                    if (user){
                        
                        return <Component {...props}/>
                    }else{
                        return <Redirect to='/sign'></Redirect>
                    }
                }
                
            }/>
    )
}

export default connect(({authedUser})=>({
    user:authedUser
}))(ProtectedRoute)