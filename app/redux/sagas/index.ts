import {takeLatest} from 'redux-saga/effects';
import {getPosts} from '../slices/getPostsSlice';
import {getUsers} from '../slices/getUsersSlice';
import {getPostsSaga} from './getPostsSaga';
import {getUsersSaga} from './getUsersSaga';

export default function* rootSaga() {
  yield takeLatest(getPosts.type, getPostsSaga);
  yield takeLatest(getUsers.type, getUsersSaga);
}
