import * as React from 'react'
import { Switch, Route as RouterRoute } from 'react-router-dom'

interface Props {
    path: string
    component: JSX.Element
}

export const Route: React.FC<Props> = ({ path, component }) => (
    <Switch>
        <RouterRoute path={path} component={() => component} />
    </Switch>
)
