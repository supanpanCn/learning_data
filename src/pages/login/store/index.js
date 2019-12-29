// 模块中用于统一导出的出口文件
// 导出供全局reducer进行合并
import reducer from './reducer'
// 提供给组件派发saga指令
import * as listeners from './listeners'
// 对于非异步操作可以直接暴露actionCreators，另外也需要暴露给saga在执行完异步操作后派发给reducer
import * as actionCreators from './actionCreators'
export {reducer,listeners,actionCreators}