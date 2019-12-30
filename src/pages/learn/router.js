import asyncComponent from '@components/AsyncComponent'

export default [
    { 
        path: '/learn_index',
        component: asyncComponent(() => import('./index')),
        routes:[
            {
                path: '/learn_index/home',
                exact: true,
                component: asyncComponent(() => import('./component/home')),
            }
        ]
    }
] 