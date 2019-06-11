import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import { Routes } from './Routes'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './Theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <React.Suspense fallback={'...Loading'}>
                <Routes />
            </React.Suspense>
        </>
    </ThemeProvider>,
    document.getElementById('root')
)

serviceWorker.unregister()
