import React, { createContext, useReducer } from 'react';
import { ContextData, ActionTypes, AppProviderProps } from './types';
import appReducer from './reducer'

const defaultState = {
  user: '',
  timerStarted: false,
  timer: 0,
  modalDisplayed: false,
  setUser: () => null,
  startTimer: () => null,
  resetTimer: () => null,
  endTimer: () => null,
  addTimer: () => null,
  setModal: () => null
}

const AppContext = createContext<ContextData>(defaultState);

const AppProvider: React.FC<AppProviderProps> = ({ children, testState }) => {

  const initialState = {
    ...defaultState,
    ...testState,
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  const setUser = (user: string) => {
    dispatch({
        type: ActionTypes.SET_USER,
        payload: user
    });
  };

  const startTimer = () => {
    dispatch({
      type: ActionTypes.START_TIMER
    });
  };

  const resetTimer = () => {
    dispatch({
      type: ActionTypes.RESET_TIMER
    });
  };

  const endTimer = () => {
    dispatch({
      type: ActionTypes.END_TIMER
    });
  };

  const addTimer = (time: number) => {
    dispatch({
      type: ActionTypes.ADD_TIMER,
      payload: time
    });
  };

  const setModal = (value: boolean) => {
    dispatch({
      type: ActionTypes.SET_MODAL,
      payload: value
    });
  };

  return (
    <AppContext.Provider 
      value={
        {
          user: state.user,
          timerStarted: state.timerStarted,
          timer: state.timer,
          modalDisplayed: state.modalDisplayed,
          setUser,
          startTimer,
          resetTimer,
          endTimer,
          addTimer,
          setModal
        }
      }>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };