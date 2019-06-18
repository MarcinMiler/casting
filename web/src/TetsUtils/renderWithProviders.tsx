import * as React from 'react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'Theme'

export function renderWithProviders(
    ui: JSX.Element,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) {
    return {
        ...render(
            <ThemeProvider theme={theme}>
                <Router history={history}>{ui}</Router>
            </ThemeProvider>
        ),
        history
    }
}
