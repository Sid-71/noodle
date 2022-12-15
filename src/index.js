import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";


ReactDOM.render(
  <React.StrictMode>
   <StateProvider initialState = {initialState} reducer = {reducer}
   >
     <App />
   </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);





// we will provide a data layer around our app 
// we want to pick our users from that data layer and 
// and evey component should do the same so that our work will will be easier 