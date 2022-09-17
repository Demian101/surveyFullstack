import axios from "axios";
export default axios.create({
  // http://localhost:1337/api/tutorials
  // baseURL: "http://localhost:1337/api"
  baseURL: "http://localhost:8080",     // Mac 测试用的 API
  // baseURL: "http://39.105.169.246/api",  // 服务器在用的 API
  headers: {
    "Content-type": "application/json"
  }
});
