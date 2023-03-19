import axios from "axios";
const headers = {
  "X-Custom-Header": "application/json",
};
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER,
  //timeout: 1000,
  headers,
});
