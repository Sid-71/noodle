import React from 'react';
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
   <Router>
     <Switch>
       <Route path="/search">
         <SearchPage />
        
       </Route>
       <Route path="/">        
       {/* this forward slash is the meaning of the home page  */}
            <Home />
        </Route>
       </Switch>
   </Router>
      
    </div>
  ); 
}

export default App;
