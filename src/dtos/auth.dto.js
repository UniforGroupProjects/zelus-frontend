export const mapUserDTO = (data) => {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
  };
};

export const mapAuthResponseDTO = (data) => {
  return {
    user: mapUserDTO(data.user),
    token: data.token,
  };
};