import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// 配置saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))
// 运行saga
sagaMiddleware.run(rootSaga)
export default store


