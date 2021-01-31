//set up data layer
//We need this to track basket

import React, {createContext,useContext,useReducer} from 'react';

//This is data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>


    ) 

    export const useStateValue = () => useContext(StateContext);



