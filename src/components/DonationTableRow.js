import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class DonationTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteDonation = this.deleteDonation.bind(this);
    }

    deleteDonation() {
        axios.delete('http://localhost:4000/donations/delete-donation/' + this.props.obj._id)  //meke Donation change kara donation walt 38 wala edit thibba eka update kara
            .then((res) => {
                alert('donation successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.D_name}</td>
                <td>{this.props.obj.D_email}</td>
                <td>{this.props.obj.D_address}</td>
                <td>{this.props.obj.D_phone}</td>
                <td>{this.props.obj.D_type}</td>
                <td>{this.props.obj.D_discrition}</td>
                <td>{this.props.obj.D_amount}</td>
               
                <td>
                    <Link className="edit-link" to={"/update-donation/" + this.props.obj._id}>  
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteDonation} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i>
                        Delete</Button>
                </td>
            </tr>

        );
    }
}