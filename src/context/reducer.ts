import { ActionTypes, Action, ContextData} from './types';

const reducer = (state: ContextData, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload as string
      };
    case ActionTypes.SET_TIMER:
      return {
        ...state,
        timer: action.payload as number
      };
    default:
      return state;
  }
};

export default reducer;