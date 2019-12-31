import asyncComponent from '@components/AsyncComponent'

export default [
    { 
        path: '/learn_index',
        component: asyncComponent(() => import('./index')),
        routes:[
            {
                path: '/learn_index/home',
                component: asyncComponent(() => import('./component/home')),
            },
            {
                path: '/learn_index/report',
                component: asyncComponent(() => import('./component/home')),
            }
        ]
    }
] 