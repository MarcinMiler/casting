import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootEpic } from './rootEpic'
import { rootReducer } from './rootReducer'

const epicMiddleware = createEpicMiddleware()

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)
