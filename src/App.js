import React from "react";
import {Route, Switch} from'react-router-dom'
import { Box } from "@chakra-ui/react"
import NavBar from "./components/navbar/NavBar";
import DashBoard from "./components/DashBoard";
import Card from './components/Card'
import NewQ from "./components/NewQ";
import Mov from './components/imgs/Mov.png'
import LeaderBoard from "./components/LeaderBoard";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/Error";
import { connect } from "react-redux";
import  { handleInitialData } from './actions/shared'
import ProtectedRoute from './components/ProtectedRoute'

class App extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render(){
    return (
      <Box  pos='relative' >
      <Box  zIndex= 'hide' pos='fixed' width="100%" height="full"   bgImage={`url(${Mov})`}   bgPosition="center" bgSize='cover'  bgAttachment='fixed'></Box>
        
       <NavBar/>
       <Switch>
       <Route exact path='/sign' component={SignUp}/>
       <ProtectedRoute exact path='/' component={DashBoard}/>
       <ProtectedRoute exact path='/add' component={NewQ}/>
       <ProtectedRoute exact path='/leaderBoard' component={LeaderBoard}/>
       <ProtectedRoute exact path='/cards/:id' component={Card}/>

       
       <ProtectedRoute  path='/*' component={ErrorPage}/>
  
       
       
       </Switch>
       
      
      </Box>
    )

  }
 
}

export default connect()(App);
