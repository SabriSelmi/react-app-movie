import React from "react";
import Rating from "react-rating";

const Modal=({cardmovie,remove,id})=>
{
    return (
        


        
        <div className="col-md-4 p-3" href="/">
        <div className="imag">
                            
        <img src={cardmovie.picture} alt='/' style={{width:'300px', height:'300px'}}/>
        <p className="description">{cardmovie.description} <br/><br/><br/> <Rating style={{color:"yellow"}} initialRating={cardmovie.rating} emptySymbol="fa fa-star-o fa-1x"  fullSymbol="fa fa-star fa-1x"/></p>
            <div className="lien row">
                <p className="text-label col-12">{cardmovie.title}</p>               
            </div>
            <button className="btn btn-dark col-12" onClick={()=>remove(id)}>remove</button>
            </div>
            </div>
                        
                
    )

}
export default Modal;