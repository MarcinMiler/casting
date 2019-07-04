import { AppState } from 'Config/appState'

export const getNotifications = (state: AppState) =>
    state.notifications.notifications
