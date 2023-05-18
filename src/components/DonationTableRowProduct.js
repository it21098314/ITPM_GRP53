import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class DonationTableRowProduct extends Component {

   

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
                    
                </td>
            </tr>

        );
    }
}