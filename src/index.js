import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import {middleware} from './middlewares'
import {reducer} from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer,middleware)

ReactDOM.render(
    <BrowserRouter>
    <ChakraProvider >
     <Provider store={store}>
      <App />
     </Provider>
     
    </ChakraProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

