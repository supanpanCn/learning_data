// 这里是最终派发给reducer的action
import * as actionTypes from './actionTypes'
// 为了确保数据的统一性，同样使用fromJS进行包装
import {fromJS} from 'immutable'
export const user_select = ()=>({
    type:actionTypes.USER_IS_SELECT
})
