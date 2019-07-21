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
        component: React.lazy(() => import('Pages/CreateCasting')),
        auth: true
    },
    {
        path: '/createCompany',
        component: React.lazy(() => import('Pages/CreateCompany')),

        auth: true
    },
    {
        path: '/my-companies',
        component: React.lazy(() => import('Pages/MyCompanies')),
        auth: true
    },
    {
        path: '/',
        component: React.lazy(() => import('Pages/Login'))
    }
]
