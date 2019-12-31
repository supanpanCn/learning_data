// 这是被saga监听的函数文件
// 引入saga指令
import * as listenerTypes from './listenerTypes'
// 向saga派发事件
export const get_user_select = (paper_id)=>{
    return {
        type:listenerTypes.SAGA_PAPER_LIST,
        paper_id
    }
}