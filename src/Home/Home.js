import React from 'react';
import './Home.css';
import small from '../small.png';
import feature from '../feature.png';

import "bootstrap/dist/css/bootstrap.min.css";

class  Home extends React.Component{
    render(){
    
    return(
    
        <div className="container1">
        <div className="left1">
        <div className="white-bar1"></div>
        <div className="quote1">
        <p>" The expert in anything was once a beginner!  "</p>
        </div>
        <div className="small-image1">
        <img src={small} alt="image" />  
        </div>

        </div>
        
        <div className="right1">
        <div className="red-bar1"></div>
        <div className="feature-image1">
        <img src={feature} alt="feature-image" />
        <h1> EFFICIENT</h1>
        </div>
        <div className="text-box1">
        <h2>Employee solution center</h2>
        <p> Work Mate enables in easy management of all the Employee details</p>
        <div className="black1">
        <span></span>
        </div>
        </div>
        <div className="end1">
        </div>
        
        </div>
       
   
       
        
        </div>
       
    );
}
}

export default Home;