import React from 'react';
import moment from 'moment';

import { Row, Col, Table } from 'reactstrap';

export default ({ data, searching }) => {
  return (
    <Row>
      <Col md="12" xs="12">
        <Table hover responsive striped size="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Occupation</th>
              <th>Home Address</th>
              <th>Office Address</th>
            </tr>
          </thead>
          <tbody>
            {searching ? (
              <tr>
                <td />
                <td />
                <td />
                <td>
                  <i
                    className="fa fa-spinner fa-spin fa-2x"
                    style={{ flex: 1, textAlign: 'center', margin: 10, width: '100%' }}
                  />
                </td>
              </tr>
            ) : !searching && !data.length ? (
              <h4 style={{ textAlign: 'center', marginTop: 20 }}>No Parents/Guardians</h4>
            ) : (
              data.map((staff, i) => (
                <tr style={{ cursor: 'pointer' }}>
                  <td> {i + 1} </td>
                  <td> {staff.fullName} </td>
                  <td> {staff.classInfo} </td>
                  <td> {staff.gender === 'M' ? 'Male' : staff.gender === 'F' ? 'Female' : ''} </td>
                  <td> {moment(staff.dob).format('MMM Do')} </td>
                  <td> {staff.phoneNumber} </td>
                  <td> {staff.email} </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
