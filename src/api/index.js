import axios from "axios";

const BASE_URL = {
  development: "http://localhost",
  production: "http://192.168.1.1"
};

const header = {
  "Content-Type": "application/json",
  Authorization: "JWT Token",
  "Access-Control-Allow-Origin": "*"
};

const handleSuccess = response => {
  console.info("-- HTTP REQUEST SUCCESS --", response);
  return response;
};

const handleError = error => {
  console.error("-- HTTP REQUEST FAIL --", error.config);

  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error("Error Message:", error.message);
  }

  return Promise.reject(error.response || error.message);
};

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? BASE_URL.development
      : BASE_URL.production,
  headers: header
});

client.interceptors.request.use(
  config => {
    const token = "JWT";

    if ( token != null ) {
      config.headers.Authorization = "Bearer " + token;
    }

    console.info("-- HTTP REQUEST --", config);

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

client.interceptors.response.use(handleSuccess, handleError);

// client.interceptors.response.use(this.handleSuccess, this.handleError);

// client.fetch = (path, callback) => {
//   return client
//     .get(path)
//     .then(response => callback(response.status, response.data));
// };

// client.post = (path, payload, callback) => {
//   return client
//     .request({
//       method: "POST",
//       url: path,
//       responseType: "json",
//       data: payload
//     })
//     .then(response => callback(response.status, response.data));
// };

export default client;
