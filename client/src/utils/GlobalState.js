import React, { createContext, useReducer, useContext } from "react";
import { ADD_IMAGE, CREATE_USER, UPDATE_USER } from "./actions";

const UserContext = createContext();
const { Provider } = UserContext;
// TODO
// ALSO, do we actually need a reducer function? If we don't have a need for a
// switch case, would it make sense to simply have a useContext here, and that be it?

// reducer portion of the useReducer
// our current state, and the action called by our 'dispatch' in the useReducer hook
// we call this reducer to update our state on the page. What we need to remember is that the state also will need to update on the backend, as it's the same data. so every 'update' will need to be a 'dispatch' update as well as a dbUpdate in the routes folder.
// all our 'dispatch' calls will be on the page or component it's called from. We will most likely do that for both calls?
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
      // here lies our state.
      // do we store images our our state? Need to ask TA/Anthony
      // realistically, we are only using state once a user logs in, so we can pass this data around the site, for directions to a doctor
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
