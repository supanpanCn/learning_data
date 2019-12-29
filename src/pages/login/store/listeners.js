// 这是被saga监听的函数文件
// 引入saga指令
import * as listenerTypes from './listenerTypes'
// 向saga派发事件
export const get_user_select = ()=>{
    return {
        type:listenerTypes.SAGA_USER_SELECT
    }
}