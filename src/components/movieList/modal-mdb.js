import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: '',description :'' ,rating: '', picturelink:''};

    
  }

  toggle=()=> {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName=(event)=> {
    this.setState({name: event.target.value});
  }
  handleChangeDescription=(event)=> {
    this.setState({description: event.target.value});
  }
  handleChangePicturelink=(event)=> {
    this.setState({picturelink: event.target.value});
  }

  handleChangeRating=(event)=> {
    this.setState({rating: event.target.value});
  }

  handleSubmit=(event)=> {
    event.preventDefault();
     }

add=()=>{
    let x={title:this.state.name,
        description :this.state.description ,
        rating:this.state.rating, picture:this.state.picturelink}
        return(x)
}

clear=()=>{
    this.setState({name:'',
    description:'',
    rating:'',
    picturelink:'',
})
}
  render() {
    return (

        <div style={{position:"sticky",bottom:'0rem'}}>
         
        <Button color="success" onClick={this.toggle}>Add Movie</Button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Movie's description</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-md-12">
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-12">
            <label>Description:</label>
                <input type="text" value={this.state.description} onChange={this.handleChangeDescription} className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-12">
              <label>Movie Picture Link:</label>
                <input type="text" value={this.state.picturelink} onChange={this.handleChangePicturelink} className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-12">
              <label>Rating:</label>
                <input type="text" value={this.state.rating} onChange={this.handleChangeRating} className="form-control" />
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-secondary" onClick={()=>{this.props.add(this.add());this.clear();this.toggle()}}/>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
