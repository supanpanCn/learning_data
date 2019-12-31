// saga提供的交互指令
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as sagaTypes from './../pages/learn/store/listenerTypes'
import * as actionCreates from './../pages/learn/store/actionCreators'
import axios from 'axios'
function* get_paper_list(obj) {
    let res = yield axios.get('/api/paper_list.json')
    if(res.data.response=='ok'){
        let list = res.data.paper_list
        
        list = list.filter((v)=>{
            return v.paper_id == obj.paper_id
        })
        
        yield put(actionCreates.user_select(list[0]))
    }
}


export function* reportSaga() {
    yield takeEvery(sagaTypes.SAGA_PAPER_LIST, get_paper_list);
}