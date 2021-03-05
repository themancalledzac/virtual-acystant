import React, { createContext, useReducer, useContext } from "react";
import { ADD_IMAGE, CREATE_USER, UPDATE_USER } from "./actions";

const UserContext = createContext();
const { Provider } = UserContext;
// TODO
// ALSO, do we actually need a reducer function? If we don't have a need for a
// switch case, would it make sense to simply have a useContext here, and that be it?

// reducer portion of the useReducer
// our current state, and the action called by our 'dispatch' in the useReducer hook
const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        // here we would update our user information. is it all as one? or would it be an object form where every item has a key? for example, more like a:
        // user: { firstName: "", lastName: "" }? otherwise is action.post just the entire 'post' portion, and brings along all associated data, almost like just passing along props?
        user: action.post,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.post,
      };
    case ADD_IMAGE:
      return {
        ...state,
        user: action.post,
      };
    default:
      return state;
  }
};

// we start with initial value as 0, and initial props
const UserProvider = ({ value = [], ...props }) => {
  //  first item is our state. current state, second is our dispatch
  const [state, dispatch] = useReducer(
    (reducer,
    {
      // here lies our state
      user: {
        _id: 0,
        firstName: "",
        lastName: "",
        email: "",
        location: {
          city: "",
          state: "",
        },
        images: [],
      },
    })
  );
  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
