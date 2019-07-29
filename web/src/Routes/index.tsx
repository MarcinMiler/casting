import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { history } from 'Config/history'
import { Notifications } from 'Pages/Notifications'
import { routes } from './routes'
import { AuthRoute } from './AuthRoute'

export const Routes = () => (
    <Router history={history}>
        <Notifications />

        <Switch>
            {routes.map(route =>
                route.auth ? (
                    <AuthRoute path={route.path} component={route.component} />
                ) : (
                    <Route
                        exact
                        path={route.path}
                        component={route.component}
                    />
                )
            )}
        </Switch>
    </Router>
)
