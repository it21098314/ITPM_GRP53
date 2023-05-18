import React, { Component } from 'react';
import axios from 'axios';


export default class InstaTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStock = this.deleteInsta.bind(this);
    }

    deleteInsta() {
        axios.delete('http://localhost:4000/instas/delete-insta/' + this.props.obj._id)
            .then((res) => {
                alert('Instuctor successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

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
                
               
            </tr>

        );
    }
}