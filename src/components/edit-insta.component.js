import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditInsta extends Component {

  constructor(props) {
    super(props)

    this.onChangeInstaI_id = this.onChangeInstaI_id.bind(this);
    this.onChangeInstaI_name = this.onChangeInstaI_name.bind(this);
    this.onChangeInstaI_email= this.onChangeInstaI_email.bind(this);
    this.onChangeInstaI_address= this.onChangeInstaI_address.bind(this);
     
    this.onChangeInstaI_phone= this.onChangeInstaI_phone.bind(this);
    this.onChangeInstaI_coll= this.onChangeInstaI_coll.bind(this);
    this.onChangeInstaI_edu= this.onChangeInstaI_edu.bind(this);
    
    
   
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      I_id: '',
      I_name:'',
      I_email: '',
      I_address: '',
      I_phone: '',
      I_coll: '',
      I_edu: ''
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/instas/edit-insta/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          I_id: res.data.I_id,
          I_name: res.data.I_name,
          I_email: res.data.I_email,
          I_address: res.data.I_address,
          
          I_phone: res.data.I_phone,
          I_coll: res.data.I_coll,
          I_edu: res.data.I_edu
         
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeInstaI_id(e) {
    this.setState({ I_id: e.target.value })
  }

  onChangeInstaI_name(e) {
    this.setState({ I_name: e.target.value })
  }

  onChangeInstaI_email(e) {
    this.setState({ I_email: e.target.value })
  }

  onChangeInstaI_address(e) {
    this.setState({ I_address: e.target.value })
  }

   
  onChangeInstaI_phone(e) {
    this.setState({ I_phone: e.target.value })
  }

  onChangeInstaI_coll(e) {
    this.setState({ I_coll: e.target.value })
  }

  onChangeInstaI_edu(e) {
    this.setState({ I_edu: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const instaObject = {
      I_id: this.state.I_id,
      I_name: this.state.I_name,
      I_email: this.state.I_email,
      I_address: this.state.I_address,
      I_phone: this.state.I_phone,
      I_coll: this.state.I_coll,
      I_edu: this.state.I_edu

      
    };

    axios.put('http://localhost:4000/instas/update-insta/' + this.props.match.params.id, instaObject)
      .then((res) => {
        console.log(res.data)
        console.log('Instuctor successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to customer List 
    this.props.history.push('/insta-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br></br>
        <br></br>
      &nbsp;&nbsp;<h2>Update Details</h2>
      <br></br>
      
      <Form.Group className="mb-3" controlId="I_id">
          <Form.Label>Instuctor NIC</Form.Label>
          <Form.Control type="text" value={this.state.I_id} onChange={this.onChangeInstaI_id} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_name">
          <Form.Label>I_name</Form.Label>
          <Form.Control type="text" value={this.state.I_name} onChange={this.onChangeInstaI_name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_email">
          <Form.Label>I_email</Form.Label>
          <Form.Control type="text" value={this.state.I_email} onChange={this.onChangeInstaI_email}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_address">
          <Form.Label>I_address</Form.Label>
          <Form.Control type="text" value={this.state.I_address} onChange={this.onChangeInstaI_address}  />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="I_phone">
          <Form.Label>I_phone</Form.Label>
          <Form.Control type="text" value={this.state.I_phone} onChange={this.onChangeInstaI_phone} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_coll">
          <Form.Label>I_coll</Form.Label>
          <Form.Control type="text" value={this.state.I_coll} onChange={this.onChangeInstaI_coll} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_edu">
          <Form.Label>I_edu</Form.Label>
          <Form.Control type="text" value={this.state.I_edu} onChange={this.onChangeInstaI_edu} />
        </Form.Group>


      

        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}
