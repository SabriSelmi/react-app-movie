import React from 'react';
import './spinner.css';

const LoadingHOC = (SubComponent) =>{
    return class Loading extends React.Component{
            render(){
                return this.props.delay === '0'? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>:<SubComponent {...this.props}/>
            }
        }
   
}

export default LoadingHOC;