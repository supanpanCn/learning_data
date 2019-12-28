
// 使用immutable
import {fromJS} from 'immutable'
const defaultState = fromJS({
    input_focus:false,
    list:[]
})
export default (state=defaultState,action)=>{
    return state
}
