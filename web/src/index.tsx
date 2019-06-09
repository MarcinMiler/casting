import * as React from 'react'
import * as ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<div />, document.getElementById('root'))

serviceWorker.unregister()
