import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class InstaTableRowProduct extends Component {

   

    render() {


        return (

            <tr>
                
                <td>{this.props.obj.I_id}</td>
                <td>{this.props.obj.I_name}</td>
                <td>{this.props.obj.I_email}</td>
                <td>{this.props.obj.I_address}</td>
                <td>{this.props.obj.I_phone}</td>
                <td>{this.props.obj.I_coll}</td>
                <td>{this.props.obj.I_edu}</td>
               
                <td>
                    
                </td>
            </tr>

        );
    }
}