import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { history } from 'Config/history'
import { routes } from './routes'
import { Navbar } from '../Components'

export const Routes = () => (
    <Router history={history}>
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
    </Router>
)
