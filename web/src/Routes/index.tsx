import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { history } from 'Config/history'
import { Notifications } from 'Pages/Notifications'
import { routes } from './routes'

export const Routes = () => (
    <Router history={history}>
        <Notifications />

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
