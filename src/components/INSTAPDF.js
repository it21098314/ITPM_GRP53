import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import InstaTableRow2 from './InstaTableRow2';//need to change
import { color } from "@mui/system";


export default class INSTAPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }
  

  componentDidMount() {
    axios.get('http://localhost:4000/instas/')
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
      return <InstaTableRow2 obj={res} key={i} />;
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
          
            <th>Instuctor NIC</th>
            <th>Instuctor Name</th>
            <th>Instuctor email</th>
            <th>address</th>
            <th>phone Number</th>
            <th>Collage</th>
            <th>Education</th>
           
            
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

