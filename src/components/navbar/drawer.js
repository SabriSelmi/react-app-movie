import React from 'react';
import './drawer.css'
import {FormInline} from 'mdbreact';


const Drawrer=props=>{
    let drawrerClasses='drawrer'
    if (props.show){
        drawrerClasses='drawrer open'
    }
 
    return (
<nav className={drawrerClasses}>
<button className='toggle_button1' onClick={props.click}>
    <div className="toggle_line"/>
    <div className="toggle_line"/>
    <div className="toggle_line"/>
</button>
    <ul>
    
        <li><a href="/">Home</a></li>
        <li><a href="/">Most Watched</a></li>
        <li><FormInline waves>
                  
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="search with movie name"
                      aria-label="Search"/>
                    <button className="btn bg-danger">Search</button>
                  </div></FormInline></li>
       
    </ul>
</nav>
    );
};

export default Drawrer;