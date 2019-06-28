import { createAction } from 'typesafe-actions'

export const PONG = 'PONG'
export const pongAction = createAction(PONG, action => () => action())
