// reducer是最终修改store的行为文件
// 导入action指令
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    paper_obj:{}
})

// 对监听到的action进行分发处理
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.GET_PAPER_INFO:
            return state.set('paper_obj',action.list)
    }
    return state
}
