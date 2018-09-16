import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { acceptTermCondition, denyTermCondition } from "../actions";
import TermCondition from "../components";

const mapDispatchToProps = dispatch => {
  return {
    acceptTerm: () => dispatch(acceptTermCondition()),
    denyTerm: () => dispatch(denyTermCondition())
  }
};

const mapStateToProps = state => ({
  isAccepted: state.termConditionReducers.isAccepted
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermCondition);