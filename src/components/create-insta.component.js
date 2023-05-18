import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../CSS/NewProduct.css'
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
 

export default class CreateInsta extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeInstaI_id = this.onChangeInstaI_id.bind(this);
    this.onChangeInstaI_name = this.onChangeInstaI_name.bind(this);
    this.onChangeInstaI_email= this.onChangeInstaI_email.bind(this);
    this.onChangeInstaI_address= this.onChangeInstaI_address.bind(this);
     
    this.onChangeInstaI_phone= this.onChangeInstaI_phone.bind(this);
    this.onChangeInstaI_coll= this.onChangeInstaI_coll.bind(this);
    this.onChangeInstaI_edu= this.onChangeInstaI_edu.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
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
    

    const instaObject = {
      I_id: this.state.I_id,
      I_name: this.state.I_name,
      I_email: this.state.I_email,
      I_address: this.state.I_address,
      I_phone: this.state.I_phone,
      I_coll: this.state.I_coll,
      I_edu: this.state.I_edu


     
    };
    axios.post('http://localhost:4000/instas/create-insta', instaObject)
      .then(res => console.log(res.data));

    this.setState({ I_id: '', I_name: '', I_email: '', I_address:'', I_phone: '',I_coll: '',I_edu: '' })
    this.props.history.push('/insta-list')
     
    







  }

  render() {
    return (<div className="form-wrapper">
      <Container>
        <Row>
        <Col md={6} className ="new-product__from--container">
      {/*<Form onSubmit={this.onSubmit}>*/}
      <Form style={{width:"100%"}} onSubmit={this.onSubmit}>
      <h1 className='mt-4'>Add Instructor Report </h1>
       
       

        <Form.Group className="mb-3" controlId="I_id">
          <Form.Label>Instuctor NIC</Form.Label>
          <Form.Control type="text" value={this.state.I_id} onChange={this.onChangeInstaI_id} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_name">
          <Form.Label>I_name</Form.Label>
          <Form.Control type="text" value={this.state.I_name} onChange={this.onChangeInstaI_name} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_email">
          <Form.Label>I_email</Form.Label>
          <Form.Control type="text" value={this.state.I_email} onChange={this.onChangeInstaI_email} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_address">
          <Form.Label>I_address</Form.Label>
          <Form.Control type="text" value={this.state.I_address} onChange={this.onChangeInstaI_address} required />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="I_phone">
          <Form.Label>I_phone</Form.Label>
          <Form.Control type="text" value={this.state.I_phone} onChange={this.onChangeInstaI_phone} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_coll">
          <Form.Label>I_coll</Form.Label>
          <Form.Control type="text" value={this.state.I_coll} onChange={this.onChangeInstaI_coll} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="I_edu">
          <Form.Label>I_edu</Form.Label>
          <Form.Control type="text" value={this.state.I_edu} onChange={this.onChangeInstaI_edu} required/>
        </Form.Group>

         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-users"></i>&nbsp;
          Add Stock
        </Button>
        
      </Form>
       </Col>
       <Col md={6} className="new-stock__image--container"></Col>
      </Row>
      </Container>
    </div>);
  }
}