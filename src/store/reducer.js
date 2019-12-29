// 作为全局的reducer用于统控模块的reducer
import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer } from './../pages/login/store'

export default combineReducers({
    login:loginReducer
})