import React from "react"

const Modal=({cardmovie,remove,id})=>
{
    return (
        


        
        <div className="col" href="/">
        <div className="imag">
                            
        <img src={cardmovie.picture} alt='/' style={{width:'300px', height:'300px'}}/>
        <p className="description">{cardmovie.description}</p>
            <div className="lien row">
                <p className="text-label col-12">{cardmovie.title}</p>               
            </div>
            <button className="btn btn-dark col-12" onClick={()=>remove(id)}>remove</button>
            </div>
            </div>
                        
                
    )

}
export default Modal;