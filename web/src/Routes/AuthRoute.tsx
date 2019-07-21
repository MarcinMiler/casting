import * as React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'

import { AppState } from 'Config/appState'
import { MeQuery_me } from 'GraphqlTypes'
import { getMeAsync } from 'Modules/Auth/actions'

interface PropsState {
    user: MeQuery_me | null
    isLoading: boolean
}

interface AuthRouteProps {
    component: React.LazyExoticComponent<React.FC<{}>>
    path: string
}

type Props = PropsState & AuthRouteProps & typeof mapDispatchToProps

const AuthRoutePure: React.FC<Props> = ({
    getMe,
    user,
    isLoading,
    component,
    path
}) => {
    React.useEffect(() => {
        getMe()
    }, [])

    if (isLoading) {
        return <p>loading...</p>
    }

    if (!user && !isLoading) {
        return <Redirect to="/" />
    }

    return <Route exact path={path} component={component} />
}

const mapStateToProps = (state: AppState) => ({
    user: state.auth.user,
    isLoading: state.auth.isUserLoading
})

const mapDispatchToProps = {
    getMe: getMeAsync.request
}

export const AuthRoute = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthRoutePure)
