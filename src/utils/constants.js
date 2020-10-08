import axios from "axios";

const configConstants = {
  // baseUrl: "http://18.191.250.208/",
  baseUrl: "http://localhost:4000/",
};

export const api = axios.create({
  baseURL: configConstants.baseUrl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    Accept: "*/*",
  },
});

export const usersConstants = {
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
};
