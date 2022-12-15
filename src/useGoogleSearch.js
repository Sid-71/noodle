import { useState, useEffect } from "react"
import API_KEY from "./Keys";

// key we got from cse.google.com , search engine right ?? yep . 
//creating a custom hook 
// we will search something and it will pass in data layer then data layer gets a new term and it firs off the useEffect function 
//which will return something and we use this in our search page resutl . 
const CONTEXT_KEY = "42a2ab735eaf5aa38";

const useGoogleSearch = (term) => {

    const [data,setData] = useState(null); //its own state 
    
    // whenver WeWere GonnaUse HookThis UseEffectWillFireOn.
    // and this useffect is dependent on the term
   // this means whenever the term changes its goona use this 👇 fucntion .
    useEffect(() =>{
    const fetchData = async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        ).then(response =>response.json())
        .then(result =>{
            setData(result)
        })
    }

    fetchData();
    },[term])

return { data }
};

export default useGoogleSearch
