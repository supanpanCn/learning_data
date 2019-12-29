// saga提供的交互指令
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as sagaTypes from './../pages/login/store/listenerTypes'
import * as actionCreates from './../pages/login/store/actionCreators'
function* save_user_select() {
    // 这里只是为了演示redux-saga使用，实际上这里应该在login中直接派发给reducer
    const action = yield actionCreates.user_select()
    yield put(action)
}


export function* loginSaga() {
    yield takeEvery(sagaTypes.SAGA_USER_SELECT, save_user_select);
}