import { NavigationService } from "../../../navigation/navigationService";

import AUTH_ACTIONS from "../constants";
import authService from "../../../api/authService";
// import * as dbServices from "../../../db/services";

export const requestLogin = () => {
  NavigationService.navigate("LoadingScreen");
  const user = { username: "", password: "" };
  return { user, type: AUTH_ACTIONS.LOGIN };
};

export const loginError = error => {
  NavigationService.navigate("App");
  return { error, type: AUTH_ACTIONS.FAIL };
};

export const loginSuccess = response => {
  NavigationService.navigate("App");
  return dispatch => {
    dispatch({ response, type: AUTH_ACTIONS.SUCCESS });
    router.transitionTo("/dashboard");
  };
};

export const getPreviousLogin = () => {
  // dbServices.getPreviousLogin();
  return {
    type: AUTH_ACTIONS.GET_PREVIOUS_LOGIN
  };
};

export const login = () => {
  // Returns a dispatcher function which will dispatche an action in the future
  return dispatch => {
    dispatch(requestLogin());
    // Async function (API call)
    // authService
    //   .login({
    //     username: "David",
    //     password: "hash"
    //   })
    //   .then(res => {
    //     console.log(response);
    //     // Dispatch Sync action
    //     dispatch(loginSuccess(response));
    //   })
    //   .catch(error => {
    //     // Dispatch Sync action
    //     dispatch(loginError());
    //   });
  };
};
