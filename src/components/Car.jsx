import { Component } from "react";
import { connect } from "react-redux";
import { listCars } from "../redux/actions/listCars";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    this.props.listCars();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps, { listCars })(Car);
