import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { routes } from './routes'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            {routes.map(route => (
                <Route path={route.path} component={route.component} />
            ))}
        </Switch>
    </BrowserRouter>
)
