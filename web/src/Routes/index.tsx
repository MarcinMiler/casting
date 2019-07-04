import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { history } from 'Config/history'
import { NotificationContainer } from 'Modules/Notification/Containers/Notifications'
import { NotificationsWrapper } from 'Components/NotificationsWrapper'
import { routes } from './routes'
import { Navbar } from '../Components'

export const Routes = () => (
    <Router history={history}>
        {/* <Navbar /> */}
        <NotificationsWrapper>
            <NotificationContainer />
        </NotificationsWrapper>
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
