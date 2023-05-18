import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class InstaTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteInsta = this.deleteInsta.bind(this);
    }

    deleteInsta() {
        axios.delete('http://localhost:4000/Instas/delete-insta/' + this.props.obj._id)
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
               
                <td>
                    <Link className="edit-link" to={"/edit-insta/" + this.props.obj._id}>
                    <i class="fas fa-edit"></i>
                        Edit
                    </Link>
                    <Button onClick={this.deleteInsta} size="vh" variant="danger">
                    <i class="far fa-trash-alt"></i>
                        Delete</Button>
                </td>
            </tr>

        );
    }
}