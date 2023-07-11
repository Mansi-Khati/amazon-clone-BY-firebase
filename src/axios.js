import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/clone-b40e2/us-central1/api",
});

export default instance;
