import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { store } from 'Config/state'
import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <React.Suspense fallback="...Loading">
                    <Routes />
                </React.Suspense>
            </>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
