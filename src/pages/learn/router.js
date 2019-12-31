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
                routes:[
                    {
                        path:'/learn_index/report/survey',
                        component:asyncComponent(() => import('./component/home'))
                    },
                    {
                        path:'/learn_index/report/score',
                        component:asyncComponent(() => import('./component/score'))
                    },
                    {
                        path:'/learn_index/report/feature',
                        component:asyncComponent(() => import('./component/feature'))
                    },
                    {
                        path:'/learn_index/report/exam',
                        component:asyncComponent(() => import('./component/exam'))
                    }
                ]
            }
        ]
    }
] 