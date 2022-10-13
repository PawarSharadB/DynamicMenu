import {call, put} from 'redux-saga/effects';
import Axios from 'axios';
import {sagaActions} from './sagaActions';
import {setPosts} from '../slices/getPostsSlice';

async function fetchData(url: string) {
  const response = await Axios.get(url);
  return response.data;
}

export function* getPostsSaga(action: any): any {
  try {
    const posts = yield call(fetchData, action.payload);
    yield put(setPosts({posts}));
  } catch (e) {
    yield put({type: sagaActions.FETCH_TOKEN_SAGA_FAILED});
  }
}
