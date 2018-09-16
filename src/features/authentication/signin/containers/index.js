import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../actions";
import SignIn from "../components";

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  };
};

const mapStateToProps = state => ({
  ...state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
