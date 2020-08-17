import React, { Component } from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

function onDeleteRow(rowKeys) {
  alert('You deleted: ' + rowKeys)
}

class Table extends Component {

  render() {

    const options = {
      afterDeleteRow: onDeleteRow
    }

    const selectRowProp = {
      mode: 'checkbox'
    }

    return (

      < div >
        <BootstrapTable
          data={this.props.data}
          deleteRow={true}
          selectRow={selectRowProp}
          options={options}
        >
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email'>
            email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='last_login_date'>
            Last_login_date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='registration_date'>
            Registration_date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='status'>
            Status
          </TableHeaderColumn>
        </BootstrapTable>
      </ div >
    );
  }
}

export default Table;