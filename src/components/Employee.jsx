import { Component } from "react";
import ViewComponent from "./View";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.empData,
    };
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <ViewComponent empData={employees}></ViewComponent>
      </div>
    );
  }
}

export default Employee;
