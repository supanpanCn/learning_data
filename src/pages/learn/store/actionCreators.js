// 这里是最终派发给reducer的action
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
export const user_select = (list)=>({
    type:actionTypes.GET_PAPER_INFO,
    list:fromJS(list)
})
