import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "POST,GET",
    Accept: "/",
  },
});

API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;
