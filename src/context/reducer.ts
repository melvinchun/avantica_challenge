import { ActionTypes, Action, ContextData} from './types';

const reducer = (state: ContextData, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload as string
      };
    default:
      return state;
  }
};

export default reducer;