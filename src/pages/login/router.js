import asyncComponent from '@components/AsyncComponent'

export default [
    { 
        path: '/login',
        exact: true,
        component: asyncComponent(() => import('./component/login'))
    }
] 