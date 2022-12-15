import React , {createContext, useContext , useReducer} from "react";


// 👇 this is preparing the data layer 

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState , children 
}) => (
    <StateContext.Provider value = {useReducer(reducer,
        initialState)}>
            {children}
            </StateContext.Provider>
);

//  👇 this is Hook  which allows us to pull information from data layer 

export const useStateValue = () => useContext(StateContext);





// /-------------------------------------------------------------------------------------

// notes 
// this children is reffering is  App (main component )
// initialState =  what will that data layer look like , when the app is loaded 
//reducer is intelligent which listens to changes  from data 