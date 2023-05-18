import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DonationTableRow from './DonationTableRow';// need to change 


export default class DonationList extends Component {

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
      return <DonationTableRow obj={res} key={i} />;
    });
  }

  filterContent(returns, searchTerm){
    const result= returns.filter((list)=> list.D_name.includes(searchTerm));
    this.setState({ returns: result });
  }

  handleTextSearch=(e)=>{

    console.log(e.currentTarget.value);
    const searchTerm = e.currentTarget.value;
    axios.get('http://localhost:4000/donations/')
    .then(res =>{
      const returns = res.data;
      this.setState({ returns });
      this.filterContent(returns, searchTerm)
      
    })
  }




  render() {
    return (<div className="table-wrapper">
       <br></br>
      <br></br>
      <br></br>
      <h2><i class="ffa-duotone fa-file-chart-column"></i>&nbsp;Donation Details List</h2><br/>

      <form className="md-3">
          <input className="form-control mt-1" type="search" placeholder="Search" aria-label="Search"   onChange={this.handleTextSearch}></input>
          
        </form>
        &nbsp;&nbsp;

        <Table striped bordered hover responsive>
      
        <thead>
          <tr>
            <th>Donator name</th>
            <th>Donator email</th>
            <th>Donator address</th>
            <th>phone No</th>
            <th>Donation Type</th>
            <th>Donation Description</th>
            <th>Donation amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-success"><a href="/create-donation" style={{textDecoration:'none',color:'white'}}><i class="fas fa-graduation-cap"></i>&nbsp;Add donation Details</a></button>
      &nbsp;&nbsp;
<button className="btn btn-success"><a href="/donationPDF" style={{textDecoration:'none',color:'white'}}> <i class="fas fa-book"></i>&nbsp;Genarate Report</a></button>
    </div>);
  }
}