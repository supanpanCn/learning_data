// reducer是最终修改store的行为文件
// 导入action指令
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    is_selected:localStorage.getItem('auto_login')?true:false,
})

// 对监听到的action进行分发处理
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.USER_IS_SELECT:
            let temp = !state.get('is_selected')
            if(temp){
                localStorage.setItem('auto_login',1)
            }else{
                localStorage.removeItem('auto_login')
            }
            return state.set('is_selected',temp)
    }
    return state
}
