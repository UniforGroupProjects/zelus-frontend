import api from "./api";
import { mapAuthResponseDTO } from "../dtos/auth.dto";

export const loginRequest = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return mapAuthResponseDTO(response.data);
};