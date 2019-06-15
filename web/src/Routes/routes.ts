import * as React from 'react'

export const routes = [
    {
        path: '/home',
        component: React.lazy(() => import('../Pages/Home'))
    },
    {
        path: '/castings',
        component: React.lazy(() => import('../Pages/Castings'))
    }
]
