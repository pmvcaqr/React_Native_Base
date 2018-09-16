import apiService from "./index";

const login = userInfo => {
  return apiService
    .get("user/login")
};

const AuthService = {
  login
};

export default AuthService;
