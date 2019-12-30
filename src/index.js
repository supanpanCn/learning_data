import React from 'react';
import ReactDOM from 'react-dom';
// 引入根组件
import App from './App';
// 引入antd样式文件
import 'antd/dist/antd.css'
// 引入全局样式
import './root.css'
import axios from 'axios'
React.Component.prototype.$axios = axios

ReactDOM.render(<App />, document.getElementById('root'));

