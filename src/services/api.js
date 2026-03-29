import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // endereço da API
});

export default api;