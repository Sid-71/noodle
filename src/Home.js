import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search';

const Home = () => {
    return (
 
    
     <div className='home'>
           
        <div className='home__header'>
            <div className='home__headerLeft'>
               <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>
                    <div className='home__headerRight'>
                 
                    <Link to='/gmail'>N-mail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon /> 
                    {/* material ui , an easy way for react  */}
                    <Avatar />
                    </div>
          </div>


{/* this downwoard will be main body  */}

            <div className='home__body'>
                <img 
                src="https://t3.ftcdn.net/jpg/01/68/46/18/360_F_168461837_zSzehi7rIDFiJXOM3aNjaT0FB12Hxxsm.jpg"
                />
            <div className="home_inputContainer">
                <Search  />
            </div>
            
             </div>

        </div>
    )
}

export default Home
