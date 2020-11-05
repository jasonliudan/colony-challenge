import { combineReducers } from 'redux';
import { colonyReducer, IColonyReducer } from './colony';

const rootReducer = combineReducers({
  colony: colonyReducer
});

export interface IState {
  colony: IColonyReducer
}

export default rootReducer;
