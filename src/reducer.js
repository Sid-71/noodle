export const initialState = {
term: null, // this is where Elon musk will appear when you write it down 

};


// THIS IS LIKE when sid search and press enter we watn 
// to dispatch that action , go ahead and chacnge the set term 
// 👇

export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",

};

// 👇 this is also important so have some focus 

const reducer = (state,action) =>{
    console.log(action);
// this 👇 switch state tell us , that reducer listen 
// to that if any chagne is made in data layer , and if 
// doesn't know then it returns the previous state 

    
    switch(action.type){
     case actionTypes.SET_SEARCH_TERM:
         return {
             ...state,
             term : action.term,
         };
         default:
             return state;
    }
     
};

export default reducer;
