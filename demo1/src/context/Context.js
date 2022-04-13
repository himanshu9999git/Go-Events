import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


const INITIAL_STATE = {

    user: JSON.parse('null' || localStorage.getItem("user")),
    isFetching: false,
    error: false,
    
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        console.log("in context store", state.user);
        localStorage.setItem("user", JSON.stringify(state.user));

    }, [state.user])

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
        {children}
        </Context.Provider>
    )
}