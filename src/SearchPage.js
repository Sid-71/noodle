import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import  DescriptionIcon  from '@material-ui/icons/Description';
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  
  // whenveer we want to grab something from data layer
// you always create state outside the return statement
  const [{ term  },dispatch] = useStateValue();

  // this 👇 was mock api call  
  // const data = Response; 
  const { data }=  useGoogleSearch(term); // LIVe API CALL 

    console.log(data);
    return (
  
<div className="searchPage">
                
                <div className="searchPage__header">
                <Link to="/">
                  <img 
                  className="searchPage__logo"
                  src  ="https://media.istockphoto.com/vectors/noodle-logo-vector-id1223375548?b=1&k=6&m=1223375548&s=170667a&w=0&h=h5vZqtIagIVnafb60kA0t-jlC6OPU83GPigy44xz8dk="
                  alt = ""
                  
                  />
                  
                </Link>
               <div className="searchPage__headerBody">
                 <Search hideButtons />
                 <div className="searchPage__options">
                   <div className = "searchPage__optionsLeft">
                     <div className="searchPage__option">
                        <SearchIcon />
                        <Link to="all">All</Link>
                     </div>
                     <div className="searchPage__option">
                       <DescriptionIcon />
                        <Link to="/news">News</Link>
                     </div><div className="searchPage__option">
                        <ImageIcon />
                        <Link to="/images">Images</Link>
                     </div><div className="searchPage__option">
                        <LocalOfferIcon />
                        <Link to="/shopping">Shopping</Link>
                     </div><div className="searchPage__option">
                        <RoomIcon />
                        <Link to="/maps">maps</Link>
                     </div><div className="searchPage__option">
                        <MoreVertIcon />
                        <Link to="/more">more</Link>
                     </div>
                   </div>
                   <div className="searchPage__optionsRight">
                     <div className="searchPage__option">
                      <Link to="/settings"> Settings</Link>
                     </div>
                     <div classN ame="searchPage__option">
                      <Link to="/tools"> Tools</Link>
                     </div>
                   </div>
                 </div>
               </div>
               </div>
            
            {term  && (
           <div className="searchPage__results">
              <p className = "searchPage__resultCount"
              > 
              About {data?.searchInformation.
              formattedTotalResults} results
               ({data?.searchInformation.formattedSearchTime} seconds)
                for { term } 
                </p>
               
               { data?.items.map(item =>(
                 <div className="searchPage__result">
                 <a 
                 className="searchPage__resultLink"
                 href={item.link} >
                                {item.pagemap?.cse_image?.length > 0 &&
                                      item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage__resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                        }
                                        alt=""
                                    />
                                

                   )}
                 {item.displayLink}
                 </a>
                 <a
                 className="searchPage__resultTitle"
                 href ={item.link}>
                   <h2>{item.title}</h2>

                 </a>
                 <p
                 className="searchPage__resultSnippet"> {item.snippet}</p>
                   </div>
               ))}

              </div>
            )}
                
               

 </div>
    )
}

export default SearchPage
