import { ActionTypes, Action, ContextData} from './types';

const reducer = (state: ContextData, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload as string
      };
    case ActionTypes.START_TIMER:
      return {
        ...state,
        timerStarted: true,
      };
    case ActionTypes.RESET_TIMER:
      return {
        ...state,
        timer: 0
      };
    case ActionTypes.END_TIMER:
      return {
        ...state,
        timerStarted: false
      };
    case ActionTypes.ADD_TIMER:
      return {
        ...state,
        timer: state.timer + (action.payload as number)
      };
    case ActionTypes.SET_MODAL:
      return {
        ...state,
        modalDisplayed: action.payload as boolean
      };
    default:
      return state;
  }
};

export default reducer;