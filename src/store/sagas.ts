import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import api from '../services/api';
import { ItemsTypes } from '../types';
import { loadFailure, loadSuccess } from './actions/items';

function* load() {
  try {
    const { data } = yield call(api.get, 'http://localhost:3000/items');
    yield put(loadSuccess(data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export default function* () {
  return yield all([
    takeLatest(ItemsTypes.LOAD_REQUEST, load),
  ]);
}
