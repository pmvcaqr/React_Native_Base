import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { acceptTermCondition, denyTermCondition } from "../actions";
import LoadingScreen from "../components";

const mapDispatchToProps = dispatch => {
  return {
    acceptTerm: () => dispatch(acceptTermCondition()),
    denyTerm: () => dispatch(denyTermCondition())
  }
};

const mapStateToProps = state => ({
  isLoading: state.loadingScreenReducers.isLoading
});

export default connect(
  mapStateToProps
)(LoadingScreen);