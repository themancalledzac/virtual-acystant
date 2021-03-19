import React, { createContext, useReducer, useContext } from "react";

import { LOGIN_SIGNUP_SWITCH, LOGIN_USER, LOGOUT_USER } from "./action";

const StoreContext = createContext({
  userAuth: {},
});

const { Provider } = StoreContext;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, userAuth: payload };

    case LOGIN_SIGNUP_SWITCH:
      return { ...state, loginSignup: !state.loginSignup };

    case LOGOUT_USER:
      return { ...state, userAuth: {} };

    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {
    userAuth: {},
    user: {
      _id: 0,
      firstName: "",
      lastName: "",
      email: "",
      location: {
        city: "",
        state: "",
      },
      loginSignup: false,
    },
    headerCard: {
      home: {
        title: "state title yo",
        paragraph: "state paragraph yo",
      },
      about: {},
      doctor: {},
    },
  });

  return <Provider value={[store, dispatch]}>{children}</Provider>;
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
