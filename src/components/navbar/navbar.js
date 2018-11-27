import React from "react";
import Toggle from './toggle';
// import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from "react-bootstrap";
import {FormInline} from 'mdbreact';
import Rating from "react-rating";
import FontAwesome from "react-fontawesome"
import './navbar.css';
import Logo from '../image/logo.png'





class Toolbar extends React.Component{
  constructor(props){
    super (props)
    this.state=({
      search:''
    })
  }
  handleChange=(event)=>{
    this.setState({
      search:event.target.value
      
    })
  this.props.search(event.target.value)
  }
 
  render(){
    return(
<header className="toolbar">

    <nav className="toolbar_navigation row">
        <div className='toggle_button'> <Toggle click={this.props.drawerClickHandler}/> </div>
        <div className="toolbar_logo  col-1"><a href="/"><img className="logo" src={Logo}  alt='' style={{width:"200px",height:"100px"}}/></a></div>
        
        <div className="toolbar_navigation_items col-10">
            <ul className="row">
                <li className="col"><a href="/">Home</a></li>
                <li className="col"><a href="/">Most watched</a></li>
                <li className="dropdown col"><div className="dropbtn"><FormInline waves>
                  
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="search with movie name"
                      aria-label="Search"
                    onChange={this.handleChange}/>
                    <button className="btn bg-danger">Search</button>
                  </div></FormInline>
                  <div className="md-form my-0 " style={{color:"white"}}>Search with rating <Rating style={{color:"yellow"}}  emptySymbol="fa fa-star-o fa-1x"  fullSymbol="fa fa-star fa-1x"/>
                  <FontAwesome className='super-crazy-colors' name='rocket' size='2x' spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:"red"}}/>
                  </div>
              </div>
               
                
     
                </li>
                                      
            </ul>
            
        
        </div>
    </nav>

</header>
)}};
  export default Toolbar;