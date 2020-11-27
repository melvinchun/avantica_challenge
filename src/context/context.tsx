import React, { createContext, useReducer } from 'react';
import { ContextData, ActionTypes } from './types';
import appReducer from './reducer'

const initialState = {
  user: '',
  setUser: () => null
}
 
const AppContext = createContext<ContextData>(initialState);

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const setUser = (user: string) => {
    dispatch({
        type: ActionTypes.SET_USER,
        payload: user
    });
  };

  return (
    <AppContext.Provider 
      value={
        {
          user: state.user,
          setUser
        }
      }>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };