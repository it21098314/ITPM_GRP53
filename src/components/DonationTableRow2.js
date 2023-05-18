import React, { Component } from 'react';
import axios from 'axios';


export default class DonationTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStock = this.deleteDonation.bind(this);
    }

    deleteDonation() {
        axios.delete('http://localhost:4000/donations/delete-donation/' + this.props.obj._id)
            .then((res) => {
                alert('Instuctor successfully deleted!')
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
                
               
            </tr>

        );
    }
}