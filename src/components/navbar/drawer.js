import React from 'react';
import './drawer.css'


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
    
        <li><a href="/">About us</a></li>
        <li><a href="/">Career</a></li>
        <li><a href="/">Department</a></li>
        <li><a href="/">Marketing & PR</a></li>
        <li><a href="/">Customer success & sales</a></li>
        <li><a href="/">IT, Product, Design & UX</a></li>
        <li><a href="/">Finance & Administration</a></li>
        <li><a href="/">HR & more</a></li>
    </ul>
</nav>
    );
};

export default Drawrer;