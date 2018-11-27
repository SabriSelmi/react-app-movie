import React from "react"
import "./toggle.css"


const Toggle = props =>(

<button className='toggle_button' onClick={props.click}>
    <div className="toggle_line"/>
    <div className="toggle_line"/>
    <div className="toggle_line"/>
</button>

);

export default Toggle;