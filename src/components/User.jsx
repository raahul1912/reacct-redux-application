import { Component } from "react";
import { listUsers } from "../redux/actions/listUsers";
import { connect } from "react-redux";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.props.listUsers();
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { listUsers })(User);
