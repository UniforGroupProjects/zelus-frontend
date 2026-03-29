export const saveAuth = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const getAuth = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  return {
    user: user ? JSON.parse(user) : null,
    token,
  };
};

export const clearAuth = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};