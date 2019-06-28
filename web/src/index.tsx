import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { store } from 'ReduxConfig/state'
import * as serviceWorker from './serviceWorker'
import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'
import { client } from './Apollo'

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyle />
                    <React.Suspense fallback="...Loading">
                        <Routes />
                    </React.Suspense>
                </>
            </ThemeProvider>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()
