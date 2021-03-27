const loginSignupSwitch = (state = false, { type }) => {
  switch (type) {
    case "LOGIN_SIGNUP_SWITCH":
      return !state;
    default:
      return state;
  }
};

export default loginSignupSwitch;