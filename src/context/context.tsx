import React, { createContext, useReducer } from 'react';
import { ContextData, ActionTypes } from './types';
import appReducer from './reducer'

const initialState = {
  user: '',
  timer: 0,
  setUser: () => null,
  setTimer: () => null
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

  const setTimer = (seconds: number) => {
    dispatch({
      type: ActionTypes.SET_TIMER,
      payload: seconds
    });
  };

  return (
    <AppContext.Provider 
      value={
        {
          user: state.user,
          timer: state.timer,
          setUser,
          setTimer
        }
      }>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };