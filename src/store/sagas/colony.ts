import { put } from "redux-saga/effects";

// import { decrementAsyncSuccess, decrementSuccess, incrementAsyncSuccess, incrementSuccess } from "../actions/counter/counter";
// import { fetchData } from "./api";
import { getColonyClient } from '../../api/colony';
import {
  getPayoutClaimed,
  getColonyRoleSet,
  getDomainAdded,
  getColonyInitialised
} from '../../api/colonyEvents';
import { setEventData } from '../actions/colony';
// worker Saga: will be fired on INCREMENT actions
function* getEventDataWatcher() {
  try {

    const colonyClient = yield (getColonyClient());


    const payoutClaimed = yield (getPayoutClaimed(colonyClient));
    const colonyRoleSet = yield (getColonyRoleSet(colonyClient));
    const domainAdded = yield (getDomainAdded(colonyClient));
    const colonyInitialized = yield (getColonyInitialised(colonyClient));
    const eventData = payoutClaimed.concat(colonyRoleSet, domainAdded, colonyInitialized);

    eventData.sort((a: any, b: any) => a.logTime - b.logTime);

    yield put(setEventData(eventData));

  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
}

export {
  getEventDataWatcher
};
