import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { routes } from './routes'
import { Navbar } from '../Components'

export const Routes = () => (
    <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>
            {routes.map(route => (
                <Route
                    exact
                    key={route.path}
                    path={route.path}
                    component={route.component}
                />
            ))}
        </Switch>
    </BrowserRouter>
)
