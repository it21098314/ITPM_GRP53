import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../CSS/NewProduct.css'
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
 

export default class CreateDonation extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeDonationD_name = this.onChangeDonationD_name.bind(this);
    this.onChangeDonationD_email = this.onChangeDonationD_email.bind(this);
    this.onChangeDonationD_address= this.onChangeDonationD_address.bind(this);
    this.onChangeDonationD_phone= this.onChangeDonationD_phone.bind(this);
     
    this.onChangeDonationD_type= this.onChangeDonationD_type.bind(this);
    this.onChangeDonationD_discrition= this.onChangeDonationD_discrition.bind(this);
    this.onChangeDonationD_amount= this.onChangeDonationD_amount.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
        D_name: '',
        D_email:'',
        D_address: '',
        D_phone: '',
        D_type: '',
        D_discrition: '',
        D_amount: ''
      
    }
  }

  onChangeDonationD_name(e) {
    this.setState({ D_name: e.target.value })
  }

  onChangeDonationD_email(e) {
    this.setState({ D_email: e.target.value })
  }

  onChangeDonationD_address(e) {
    this.setState({ D_address: e.target.value })
  }

  onChangeDonationD_phone(e) {
    this.setState({ D_phone: e.target.value })
  }

   
  onChangeDonationD_type(e) {
    this.setState({ D_type: e.target.value })
  }

  onChangeDonationD_discrition(e) {
    this.setState({ D_discrition: e.target.value })
  }

  onChangeDonationD_amount(e) {
    this.setState({ D_amount: e.target.value })
  }



  onSubmit(e) {
    

    const donationObject = {
        D_name: this.state.D_name,
        D_email: this.state.D_email,
        D_address: this.state.D_address,
        D_phone: this.state.D_phone,
        D_type: this.state.D_type,
        D_discrition: this.state.D_discrition,
        D_amount: this.state.D_amount


     
    };
    axios.post('http://localhost:4000/donations/create-donation', donationObject)
      .then(res => console.log(res.data));

    this.setState({ D_name: '', D_email: '', D_address: '', D_phone:'', D_type: '',D_discrition: '',D_amount: '' })
    this.props.history.push('/donation-list')
     
    







  }

  render() {
    return (<div className="form-wrapper">
      <Container>
        <Row>
        <Col md={6} className ="new-product__from--container">
      {/*<Form onSubmit={this.onSubmit}>*/}
      <Form style={{width:"100%"}} onSubmit={this.onSubmit}>
      <h1 className='mt-4'>Add Donations</h1>
       
       

        <Form.Group className="mb-3" controlId="D_name">
          <Form.Label>Donator Name</Form.Label>
          <Form.Control type="text" value={this.state.D_name} onChange={this.onChangeDonationD_name} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_email">
          <Form.Label>Donator email</Form.Label>
          <Form.Control type="text" value={this.state.D_email} onChange={this.onChangeDonationD_email} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_address">
          <Form.Label>Donator address</Form.Label>
          <Form.Control type="text" value={this.state.D_address} onChange={this.onChangeDonationD_address} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_phone">
          <Form.Label>Donator phone number</Form.Label>
          <Form.Control type="text" value={this.state.D_phone} onChange={this.onChangeDonationD_phone} required />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="D_type">
          <Form.Label>Donation type(resourse or funds)</Form.Label>
          <Form.Control type="text" value={this.state.D_type} onChange={this.onChangeDonationD_type} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_discrition">
          <Form.Label>Donation Discrition</Form.Label>
          <Form.Control type="text" value={this.state.D_discrition} onChange={this.onChangeDonationD_discrition} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_amount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Control type="text" value={this.state.D_amount} onChange={this.onChangeDonationD_amount} required/>
        </Form.Group>

         
        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
        <i class="fas fa-users"></i>&nbsp;
          Add Donations
        </Button>
        
      </Form>
       </Col>
       <Col md={6} className="new-Donation__image--container"></Col>
      </Row>
      </Container>
    </div>);
  }
}