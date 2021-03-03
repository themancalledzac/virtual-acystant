import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;
// TODO
// ALSO, do we actually need a reducer function? If we don't have a need for a
// switch case, would it make sense to simply have a useContext here, and that be it?

// we start with initial value as 0, and initial props
const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer();
  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
