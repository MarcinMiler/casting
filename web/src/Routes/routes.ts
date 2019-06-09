import * as React from 'react'

export const routes = [
    {
        path: '/',
        component: React.lazy(() => import('../Pages/Home'))
    }
]
