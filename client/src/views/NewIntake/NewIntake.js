import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Card,
  Button,
  CardHeader,
  CardBlock,
} from 'reactstrap';
import { connect } from 'react-redux';
import { callApi } from '../../utils';
import { showError, showInfo } from '../../actions/feedback';
import StudentDetails from '../../components/StudentDetails';

class NewIntake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {},
      classes: [],
    };
  }

  componentWillMount() {
    this.initialState = this.state;
  }

  edit(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        [name]: value,
      },
    });
  }

  submit() {
    let check = Object.values(this.state.studentInfo);
    check = check.every(data => data !== '');
    if (!check) {
      this.props.dispatch(showError('All fields must be filled'));
    } else {
      this.props.dispatch(showInfo('Relax!!!'));
    }
  }

  addNewStaff() {
    let filled = Object.values(this.state).every(val => val !== '');
    if (filled) {
      if (this.state.password !== this.state.password2) {
        this.props.dispatch(showError('Passwords do not match'));
        return;
      } else {
        callApi('/auth/register', { ...this.state }, 'POST')
          .then(staff => {
            this.props.dispatch(showInfo('Created Successfully'));
            this.setState(this.initialState);
          })
          .catch(err => this.props.dispatch(showError(err)));
      }
    }
    filled
      ? this.props.dispatch(showInfo('Good to go'))
      : this.props.dispatch(showError('Kindly Fill correctly'));
  }

  render() {
    const { classes } = this.state;
    return (
      <div className="container">
        <Card className="container" style={{ padding: 10 }}>
          <Card>
            <CardHeader>Official Details</CardHeader>
            <CardBlock>
              <FormGroup row>
                <Label md={2}>Academic Year</Label>
                <Col md={4}>
                  <Input type="select" name="gender" onChange={e => this.edit(e)}>
                    <option value="1" disabled selected>
                      Select Academic Year
                    </option>
                    <option value="Male">2016-2017</option>
                  </Input>
                </Col>
                <Label md={2}>Joining Date</Label>
                <Col md={4}>
                  <Input type="date" name="joiningDate" onChange={e => this.edit(e)} />
                </Col>
              </FormGroup>
            </CardBlock>
            <StudentDetails
              data={this.state.studentInfo}
              classes={this.state.classes}
              edit={e => this.edit(e)}
              submit={() => this.submit()}
            />
          </Card>
        </Card>
      </div>
    );
  }
}

export default connect()(NewIntake);