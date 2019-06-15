import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo-hooks'
import { ThemeProvider } from 'styled-components'

import * as serviceWorker from './serviceWorker'
import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'
import { client } from './Apollo'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <React.Suspense fallback="...Loading">
                    <Routes />
                </React.Suspense>
            </>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
)

serviceWorker.unregister()
