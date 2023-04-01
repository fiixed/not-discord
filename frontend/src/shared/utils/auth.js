export const logout = () => {
  localStorage.clear();
  window.location.pathname = "/login";  // fwd user to login page
};
