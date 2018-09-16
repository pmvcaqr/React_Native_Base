import AUTH_ACTIONS from "../constants";

let initialState = {
  isLoggingIn: false,
  isLoggedIn: true,
  user: {}
};

const authReducers = (state = initialState, action) => {
  initialState = state;

  switch (action.type) {
    case AUTH_ACTIONS.GET_PREVIOUS_LOGIN: {
      return {
        ...state,
        isAuthenticating: false
      };
    }
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false
      };
    case AUTH_ACTIONS.SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
      };
    case AUTH_ACTIONS.FAIL:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default authReducers;
