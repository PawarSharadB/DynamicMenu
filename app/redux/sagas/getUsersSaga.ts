import {call, put} from 'redux-saga/effects';
import Axios from 'axios';
import {sagaActions} from './sagaActions';
import {setUsers} from '../slices/getUsersSlice';

const URL = 'https://api.npoint.io/d3d9fee8dc4d67cebbed';

async function fetchUsersData() {
  const response = await Axios.get(URL);
  return response.data;
}

export function* getUsersSaga(): any {
  try {
    const users = yield call(fetchUsersData);
    yield put(setUsers({users}));
  } catch (e) {
    yield put({type: sagaActions.FETCH_USERS_SAGA_FAILED});
  }
}
