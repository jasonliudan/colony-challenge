import * as ActionTypes from '../constants';

export const getEventData = () => {
    return { type: ActionTypes.GET_EVENT_DATA };
};
export const setEventData = (eventData: any) => {
    return { type: ActionTypes.SET_EVENT_DATA, payload: eventData };
};
