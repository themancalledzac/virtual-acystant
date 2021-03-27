const loginUserState = (state = {}, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return (state = payload);
    case "LOGOUT_USER":
      return (state = {});
    default:
      return state;
  }
};

export default loginUserState;