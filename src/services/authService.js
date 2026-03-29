import api from "./api";

export const loginRequest = async (email, password) => {
  // 1. Criamos o formato de formulário que o FastAPI exige
  const params = new URLSearchParams();
  params.append('username', email); // O Back-end lê o e-mail pelo campo 'username'
  params.append('password', password);

  // 2. Enviamos os parâmetros com o Header correto
  const response = await api.post("/login", params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return response.data; // Aqui você recebe { access_token, token_type }
};