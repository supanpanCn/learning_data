
import { fork } from "redux-saga/effects";
//获取当前目录下的所有文件
// require.context是webpack的api，用于遍历指定文件下的所有文件并执行导入
// 接收三个参数：要读取的文件夹路径、是否遍历子目录、正则
// 返回值是一个函数，该函数包含三个属性：keys（返回由匹配成功的模块名称组成的遍历结果）、id、resolve
const context = require.context("./", true, /\.js$/);
// 分解获取的文件值
const keys = context.keys().filter(item => item !== "./index.js");
let sagas = [];
for (let i = 0, len = keys.length; i < len; i++) {
  const exp = context(keys[i]);
  for (let fn in exp) {
    sagas.push(exp[fn]);
  }
}
// 当store中调用sagaMiddleware.run时会将这里的函数执行一次，可以认为是将拦截器挂载到saga进行监听
export default function* rootSaga() {
  for(let i=0;i<sagas.length;i++){
    yield fork(sagas[i])
  }
}




