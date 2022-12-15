import React , { useState }from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
// don't get confused these all are material ui code to copy icons
import {  Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import  { actionTypes } from "./reducer"; 


// what we are doing is that passing hide.. as a props and 
// then we set a condition if this then or else that and 
// and in buttons we create class and display none 
// we created class on buttons becuase we don't want to show those buttons in search page , right? yep 




function Search({ hideButtons = false}) {
    // 👇 is  data layer looks like 
    // and second is dispatch which is used to shoot actions in data layer 
  const [{},dispatch] = useStateValue();
  
  // its just like empy string ,
 // at start it will be empty . 
 const [input, setInput]  = useState("");
//  👇 this provides us with browswer history 
 const history = useHistory();

    const search = (e)=>{
// e is an event , 
// study about this , i ma not getting it 
      e.preventDefault();

      console.log('You hit >>', input);

      dispatch({
     type: actionTypes.SET_SEARCH_TERM,
     //  we are tracking the input , so we want input to be the term
      term: input
    //  this function is implemented when all the things were done 
    //  and when you write a something in search bar it will appear like this 
  //  {type: "SET_SEARCH_TERM", term: "google clone"}
   
      })

     history.push('/search');


    };
    // we will be mapping the state on input tag
    // by choosing the value and setInput e.target.value
    

    return (
        // we will changed div to form , to submit the resposne
        // we are making our all input form look like form 
        <form className="search">
            <div className="search__input">
             <SearchIcon className="search__inputIcon" />
             <input value = { input } onChange = {e => setInput(e.target.value)}  />
             <MicIcon />
             </div>

             {!hideButtons ? (
                            <div className="search__buttons">
                            {/* here onClick will be event and we have to create funciton */}
                            <Button type ='submit' onClick={search}  variant="outlined" >  Noodle Look </Button>
                            {/* material ui property {variant: outlined } */}
                            <Button variant="outlined"> I'm Feeling Great </Button>


                            </div>

             ): (


                <div className="search__buttons">
                {/* here onClick will be event and we have to create funciton */}
              <Button className="search__buttonsHidden" 
              type ='submit' onClick={search}  variant="outlined" >  Noodle Look </Button>
              {/* material ui property {variant: outlined } */}
              <Button  className="search__buttonsHidden"  
              variant="outlined"> I'm Feeling Great </Button>

           
           </div>

             )}
             
            
        </form>
    )
}

export default Search
