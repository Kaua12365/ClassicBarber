export const isLoggedIn = () => {
    return !!localStorage.getItem("USUARIO");
  };