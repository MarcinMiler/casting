import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import { Routes } from './Routes'

ReactDOM.render(
    <React.Suspense fallback={'...Loading'}>
        <Routes />
    </React.Suspense>,
    document.getElementById('root')
)

serviceWorker.unregister()
