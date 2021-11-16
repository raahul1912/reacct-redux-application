import { Component } from "react";
import ViewComponent from "./View";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: this.props.custData,
    };
  }

  render() {
    const { customers } = this.state;
    return (
      <div>
        <ViewComponent custData={customers}></ViewComponent>
      </div>
    );
  }
}

export default Customer;
