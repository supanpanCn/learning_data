import React from 'react';
// 使用Provider向组件注入store
import {Provider} from 'react-redux'
// redux
import store from './store'
// 路由
import {BrowserRouter as Router} from 'react-router-dom'
// 使用react-router-config进行路由合并
import { renderRoutes } from 'react-router-config'
// 导入路由模块
const routes = [
  // ...require()
]
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* 添加到router监听 */}
          {renderRoutes(routes)}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
