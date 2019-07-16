import * as React from 'react'

export const routes = [
    {
        path: '/home',
        component: React.lazy(() => import('Pages/Home'))
    },
    {
        path: '/castings',
        component: React.lazy(() => import('Pages/Castings'))
    },
    {
        path: '/casting/:id',
        component: React.lazy(() => import('Pages/Casting'))
    },
    {
        path: '/create',
        component: React.lazy(() => import('Pages/CreateCasting'))
    },
    {
        path: '/createCompany',
        component: React.lazy(() => import('Pages/CreateCompany'))
    },
    {
        path: '/',
        component: React.lazy(() => import('Pages/Login'))
    }
]
