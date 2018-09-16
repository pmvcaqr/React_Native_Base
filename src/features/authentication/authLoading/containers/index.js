import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import AuthLoading from "../components";
import authReducers from "../../reducers";

// const mapStateToProps = (state, props) => {
//   return {
//     users: authReducers(state, actions.getPreviousLogin)
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   ...actions
// });

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading);
