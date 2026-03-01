export const Validate = (email, password) => {
  const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const passwordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!emailValid) {
    return "Email is not Valid";
  }
  if (!passwordValid) {
    return "Password is not Valid";
  }
  return null;
};
