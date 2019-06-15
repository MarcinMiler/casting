import * as React from 'react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

export function renderWithRouter(
    ui: JSX.Element,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        history
    }
}
