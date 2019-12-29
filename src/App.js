import React from 'react';
// 使用Provider向组件注入store
import {Provider} from 'react-redux'
// redux
import store from './store'
// 路由
import {BrowserRouter as Router} from 'react-router-dom'
// 使用react-router-config进行路由合并
import { renderRoutes } from 'react-router-config'
// 持久化存储
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './store'
// 导入路由模块
import homeRouter from './pages/home/router'
import loginRouter from './pages/login/router'
const routes = [
  ...homeRouter,
  ...loginRouter
]
function App() {
  return (
    <div className="App">
        
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            {/* 添加到router监听 */}
            {renderRoutes(routes)}
          </Router>
        </PersistGate>
        
      </Provider>
    </div>
  );
}

export default App;
