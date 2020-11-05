import * as ActionTypes from '../constants';


interface IColonyReducer {
  eventData: any
}

const initialState = {
  eventData: null
};

const colonyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_EVENT_DATA:
      return {
        ...state,
        eventData: action.payload
      }
    default:
      return state;
  }
};

export { colonyReducer, IColonyReducer };
