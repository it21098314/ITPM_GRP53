import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditDonation extends Component {

  constructor(props) {
    super(props)

    this.onChangeDonationD_name = this.onChangeDonationD_name.bind(this);
    this.onChangeDonationD_email = this.onChangeDonationD_email.bind(this);
    this.onChangeDonationD_address= this.onChangeDonationD_address.bind(this);
    this.onChangeDonationD_phone= this.onChangeDonationD_phone.bind(this);
     
    this.onChangeDonationD_type= this.onChangeDonationD_type.bind(this);
    this.onChangeDonationD_discrition= this.onChangeDonationD_discrition.bind(this);
    this.onChangeDonationD_amount= this.onChangeDonationD_amount.bind(this);
    
    
   
    this.onSubmit = this.onSubmit.bind(this);

    // State
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

  componentDidMount() {
    axios.get('http://localhost:4000/donations/edit-donation/' + this.props.match.params.id)
      .then(res => {
        this.setState({
            D_name: res.data.D_name,
            D_email: res.data.D_email,
            D_address: res.data.D_address,
            D_phone: res.data.D_phone,
          
            D_type: res.data.D_type,
            D_discrition: res.data.D_discrition,
            D_amount: res.data.D_amount
         
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeDonationD_name(e) {
    this.setState({ I_id: e.target.value })
  }

  onChangeDonationD_email(e) {
    this.setState({ I_name: e.target.value })
  }

  onChangeDonationD_address(e) {
    this.setState({ I_email: e.target.value })
  }

  onChangeDonationD_phone(e) {
    this.setState({ I_address: e.target.value })
  }

   
  onChangeDonationD_type(e) {
    this.setState({ I_phone: e.target.value })
  }

  onChangeDonationD_discrition(e) {
    this.setState({ I_coll: e.target.value })
  }

  onChangeDonationD_amount(e) {
    this.setState({ I_edu: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const donationObject = {
        D_name: this.state.D_name,
        D_email: this.state.D_email,
        D_address: this.state.D_address,
        D_phone: this.state.D_phone,
        D_type: this.state.D_type,
        D_discrition: this.state.D_discrition,
        D_amount: this.state.D_amount

      
    };

    axios.put('http://localhost:4000/donations/update-donation/' + this.props.match.params.id, donationObject)
      .then((res) => {
        console.log(res.data)
        console.log('donations successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to customer List 
    this.props.history.push('/donation-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <br></br>
        <br></br>
      &nbsp;&nbsp;<h2>Update Details</h2>
      <br></br>
      
      <Form.Group className="mb-3" controlId="D_name">
          <Form.Label>Donator Name</Form.Label>
          <Form.Control type="text" value={this.state.D_name} onChange={this.onChangeDonationD_name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_email">
          <Form.Label>D_email</Form.Label>
          <Form.Control type="text" value={this.state.D_email} onChange={this.onChangeDonationD_email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_address">
          <Form.Label>D_address</Form.Label>
          <Form.Control type="text" value={this.state.D_address} onChange={this.onChangeDonationD_address}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_phone">
          <Form.Label>D_phone</Form.Label>
          <Form.Control type="text" value={this.state.D_phone} onChange={this.onChangeDonationD_phone}   />
        </Form.Group>

        

        <Form.Group className="mb-3" controlId="D_type">
          <Form.Label>D_type</Form.Label>
          <Form.Control type="text" value={this.state.D_type} onChange={this.onChangeDonationD_type}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_discrition">
          <Form.Label>D_discrition</Form.Label>
          <Form.Control type="text" value={this.state.D_discrition} onChange={this.onChangeDonationD_discrition}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="D_amount">
          <Form.Label>D_amount</Form.Label>
          <Form.Control type="text" value={this.state.D_amount} onChange={this.onChangeDonationD_amount}  />
        </Form.Group>


      

        <br/>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Details
        </Button>
      </Form>
    </div>);
  }
}