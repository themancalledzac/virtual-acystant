import React, { createContext, useReducer, useContext } from "react";

import { 
    LOGIN_USER,
    LOGOUT_USER,
    CREATE_USER, 
    UPDATE_USER,
    ADD_IMAGE
 } from "./action";

 const StoreContext = createContext({
    userAuth: {},
});

const { Provider } = StoreContext;

const reducer = ( state, { type, payload, post } ) => {

    switch( type ) {
        case LOGIN_USER:

            return { ...state, userAuth: payload };

        case LOGOUT_USER:

            return { ...state, userAuth: {} };
        
        case CREATE_USER:

            return {
                ...state, user: post };

        case UPDATE_USER:

            return {
                ...state, user: post };

        case ADD_IMAGE:

            return { ...state, user: post}

        default:
            return state;
        }

}

export const StoreProvider = ( { children } ) => {

    const [ store, dispatch ] = useReducer( reducer, {
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
            images: [],
        },
        headerCard: {
        home: {
            title: "state title yo",
            paragraph: "state paragraph yo",
        },
        about: {},
        doctor: {},
        },
    } );

    return <Provider value={[store, dispatch]}>{ children }</Provider>

}

export const useStoreContext = () => {

    return useContext( StoreContext );

}

export default StoreProvider;