import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DonationTableRow2 from './DonationTableRow2';//need to change
import { color } from "@mui/system";


export default class DONATIONPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:4000/donations/')
      .then(res => {
        this.setState({
          returns: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <DonationTableRow2 obj={res} key={i} />;
    });
  }

  render() {

    function printPage() {
        window.print();
    }
    return (<div className="table-wrapper" style={{color:"#000000"}}>

      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <h2><i class="far fa-comment-alt"></i>&nbsp;Grading Details</h2><br/>
    


        <Table responsive="sm">
       
        <thead >
          <tr>
          
            <th>Donator name</th>
            <th>Donator email</th>
            <th>Donator address</th>
            <th>phone No</th>
            <th>Donation Type</th>
            <th>Donation Description</th>
            <th>Donation amount</th>
           
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button onClick= {printPage}>Print</button>
    </div>);

  }
}
