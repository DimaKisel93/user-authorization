import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Table from './Table'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      id: [],
      name: [],
      email: [],
      last_login_date: [],
      registration_date: [],
      status: [],
      userData: [],
      errors: {}
    }

  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.name,
      email: decoded.email,
      last_login_date: decoded.last_login_date,
      registration_date: decoded.registration_date,
      status: decoded.status
    })

  }

  render() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    var data = [
      {
        name: decoded.name,
        email: decoded.email,
        last_login_date: decoded.last_login_date,
        registration_date: decoded.registration_date,
        status: decoded.status
      }
    ];
    return (
      // <div className="container">
      //   <div className="jumbotron mt-5">
      //     <div className="col-sm-8 mx-auto">
      //       <h1 className="text-center">PROFILE</h1>
      //     </div>
      //     <table className="table col-md-6 mx-auto">
      //       <tbody>
      //         <tr>
      //           <td>Fist Name</td>
      //           <td>{this.state.name}</td>
      //         </tr>
      //         <tr>
      //           <td>Last Name</td>
      //           <td>{this.state.email}</td>
      //         </tr>
      //         <tr>
      //           <td>Email</td>
      //           <td>{this.state.last_login_date}</td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
      <div className="App">
        <p className="Table-header">Basic Table</p>
        <Table data={data} />
      </div>
    )
  }
}

export default Profile