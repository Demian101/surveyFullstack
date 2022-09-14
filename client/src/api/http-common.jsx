import axios from "axios";
export default axios.create({
  // http://localhost:1337/api/tutorials
  // baseURL: "http://localhost:1337/api"
  // baseURL: "http://localhost:8080",
  baseURL: "http://39.105.169.246",
  headers: {
    "Content-type": "application/json"
  }
});
