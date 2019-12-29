import asyncComponent from '@components/AsyncComponent'
// 由于没有找到类似vue中的重定向，故这样实现
import React from 'react'
const empty = (props)=>(
    <>
        {redirect(props)}
    </>
)
function redirect(props){
    if(props.route.path=='/'){
        props.history.push({
            pathname:'/home',
        })
    }
}
export default [
    { 
        path: '/',
        exact: true,
        component: empty
    },
    { 
        path: '/home',
        exact: true,
        component: asyncComponent(() => import('./index'))
    }
] 