// 作为全局的reducer用于统控模块的reducer
import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from './../pages/home/store'
// 数据持久化
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
}
export default combineReducers({
    // 包装之后导出
    header:persistReducer(persistConfig, headerReducer)
})