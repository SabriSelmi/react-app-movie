import React,{Component} from "react";
import Modal from './modal';
import ModalPage from './modal-mdb'
import "./movielist.css";
import LoadingHOC from '../spinner/spinner'


class MovieList extends Component{
constructor(props){
super(props)
this.state=({
    // tab:[],
    search:'',
    filtred:''
})
}
// // ()=>{this.setState=({
// //     tab:this.props.movielist
// // }
// )}

// remove=(i)=>
//     {
//         this.setState({
//            tab:this.state.tab.filter((el,index)=>
//         {
//             return index!==i
//         })
//         })
//     }

    // addFilm=(x)=>
    // {
    //   this.setState({
    //     tab:this.state.tab.concat(x)
    //   })
    // }

    render()
{
    console.log(this.state.movielist)
return(
 <div>  
<div className="row">
{
    this.props.movielist.map((el,i)=>
        <Modal key={i} cardmovie={el} id={i} remove={(i)=>this.props.remove(i)}/>)
}

</div>
<ModalPage   add={(i)=>this.props.add(i)}/>
</div>

)
}
}
export default LoadingHOC(MovieList);