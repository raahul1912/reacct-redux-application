import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { createData } from "../redux/actions/createData";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: "",
      employee: "",
    };
  }

  selectCustomerValue(e) {
    this.setState({ customer: e.target.value });
  }

  selectEmployeeValue(e) {
    this.setState({ employee: e.target.value });
  }

  saveData(e) {
    const { customer, employee } = this.state;
    console.log(customer, employee);
    this.props.createData({ customer, employee });
  }

  render() {
    const { userData } = this.props;
    return (
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <Form>
          <Form.Group>
            <Form.Label>Employees: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.selectValue}
              onChange={this.selectCustomerValue.bind(this)}
            >
              {this.props.users.map((employee) => (
                <option key={employee.id} value={employee.first_name}>
                  {employee.first_name}
                </option>
              ))}
            </Form.Select>
            <br />
            <Form.Label>Customers: </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.selectValue}
              onChange={this.selectEmployeeValue.bind(this)}
            >
              {this.props.users.map((customer) => (
                <option key={customer.id} value={customer.first_name}>
                  {customer.first_name}
                </option>
              ))}
            </Form.Select>
            {/* <br />
            <Form.Label>Cars: </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              {this.props.cars.map((car) => (
                <option key={car.id} value={car.car}>
                  {car.car}
                </option>
              ))}
            </Form.Select> */}
          </Form.Group>
          <br />
          <Button
            variant="primary"
            type="button"
            onClick={this.saveData.bind(this)}
          >
            Submit
          </Button>
        </Form>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr>
                <td>{item.customer}</td>
                <td>{item.employee}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.allUsers,
    cars: state.car.allCars,
    userData: state.data.userData,
  };
};

export default connect(mapStateToProps, { createData })(View);
