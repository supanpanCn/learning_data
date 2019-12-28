import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// 持久化存储
import { persistStore } from 'redux-persist'
// 配置saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))
export let persistor = persistStore(store)
// 运行saga
sagaMiddleware.run(rootSaga)
export default store