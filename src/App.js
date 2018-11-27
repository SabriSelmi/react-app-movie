import React, { Component } from 'react';
import Toolbar from './components/navbar/navbar'
import Drawer from './components/navbar/drawer'
import MovieList from "./components/movieList/movielist"

import './App.css';

const movie=[
  {
    picture:"http://www.venom.movie/site/images/share/shareImage.jpg",
    title:"Venom",
    description:'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
    rating:'5'
  },
  {
    picture:"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/013/creed-2-photo-pre-affiche-1013594.jpg",
    title:"Creed II",
    description:'Under the tutelage of Rocky Balboa, light heavyweight contender Adonis Creed faces off against Viktor Drago, son of Ivan Drago.',
    rating:'2'
  },
  {
    picture:"http://fr.web.img2.acsta.net/pictures/17/10/16/15/40/0883250.jpg",
    title:"Black-Panther",
    description:"After the death of his father, Prince T'Challa ascends to the throne of the small African country of Wakanda. T'Challa is also Black Panther, superhero. Now not only must he govern his country but defeat a dangerous adversary.",
    rating:'4'
  },
  {
    picture:"https://media.services.cinergy.ch/media/box1600/b632b37655ebf7958f88c46ce8f28ded124b9385.jpg",
    title:"Ralph 2.0",
    description:'Six years after the events of "Wreck-It Ralph," Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure.',
    rating:'5'
  },
  {
    picture:"https://images-na.ssl-images-amazon.com/images/I/91+VTNGzyVL._RI_.jpg",
    title:"Dead Pool II",
    description:'Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.',
    rating:'2'
  },
  {
    picture:"https://www.actualitte.com/images/actualites/images/mary-poppins-retour-Disney.jpg",
    title:"Mary Poppins Return",
    description:"Decades after her original visit, the magical nanny returns to help the Banks siblings and Michael s children through a difficult time in their lives.",
    rating:'1'
  }
]

class App extends Component {
  constructor(props){
    super(props)

    this.state=({
      movie:[
        {
          picture:"http://www.venom.movie/site/images/share/shareImage.jpg",
          title:"Venom",
          description:'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.',
          rating:'5'
        },
        {
          picture:"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/013/creed-2-photo-pre-affiche-1013594.jpg",
          title:"Creed II",
          description:'Under the tutelage of Rocky Balboa, light heavyweight contender Adonis Creed faces off against Viktor Drago, son of Ivan Drago.',
          rating:'2'
        },
        {
          picture:"http://fr.web.img2.acsta.net/pictures/17/10/16/15/40/0883250.jpg",
          title:"Black-Panther",
          description:"After the death of his father, Prince T'Challa ascends to the throne of the small African country of Wakanda. T'Challa is also Black Panther, superhero. Now not only must he govern his country but defeat a dangerous adversary.",
          rating:'4'
        },
        {
          picture:"https://media.services.cinergy.ch/media/box1600/b632b37655ebf7958f88c46ce8f28ded124b9385.jpg",
          title:"Ralph 2.0",
          description:'Six years after the events of "Wreck-It Ralph," Ralph and Vanellope, now friends, discover a wi-fi router in their arcade, leading them into a new adventure.',
          rating:'5'
        },
        {
          picture:"https://images-na.ssl-images-amazon.com/images/I/91+VTNGzyVL._RI_.jpg",
          title:"Dead Pool II",
          description:'Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.',
          rating:'2'
        },
        {
          picture:"https://www.actualitte.com/images/actualites/images/mary-poppins-retour-Disney.jpg",
          title:"Mary Poppins Return",
          description:"Decades after her original visit, the magical nanny returns to help the Banks siblings and Michael s children through a difficult time in their lives.",
          rating:'1'
        }
      ],
      DrawrerOpen:false,
      search:'',
      filtred:movie
    })
  }
  
      buttonDrawrer=()=>{
  this.setState((prevState)=>{
    return {DrawrerOpen: !prevState.DrawrerOpen}
  });
      } 
  
  
      buttonPager=()=>{
        this.setState({ DrawrerOpen:false } );
      };

    // hetSearch=(x) =>{
      
    //   this.setState({
    //     search:x
    //    })
    // }

    search1(search){
      let korsi =this.state.movie.filter((el,i)=>{return el.title.toLowerCase().indexOf(search)>-1})
      this.setState({filtred:korsi})
    }
    remove=(i)=>
    {
        this.setState({
          filtred:this.state.filtred.filter((el,index)=>
        {
            return index!==i
        })
        })
    }

    addFilm=(x)=>
    {
      this.setState({
        filtred:this.state.filtred.concat(x)
      })
    }
  render() {
    
  
    return (
      
      <div style={{height:'100%'}}>
        <header className="App-header">
        <Toolbar drawerClickHandler={this.buttonDrawrer} search={x=>this.search1(x)}/>
        <Drawer click={this.buttonPager} show={this.state.DrawrerOpen}/>
        </header>
        <MovieList movielist={this.state.filtred} remove={(i)=>this.remove(i)} add={(i)=>this.addFilm(i)}/>
        
      </div>
    );
  }
}

export default App;
