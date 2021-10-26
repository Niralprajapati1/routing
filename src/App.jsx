import React from 'react'
import './App.css';
import Unmounting from './Components/Unmounting';
import Main from './Components/Main';
import Mounting from './Components/Mounting';
import Updating from './Components/Updating';

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Main/>
    <Switch>

    <Route Path='/Mounting'>
    <Mounting/>
    </Route>

  
    <Route Path='/Unmounting'>
    <Unmounting/>
    </Route>
   
   
    <Route Path='/Updating'>
    <Updating/>
    </Route>

    </Switch>
    </Router>
  
     
    </>
  );
}

export default App;
