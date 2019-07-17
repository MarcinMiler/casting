import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { CastingQuery_casting } from 'GraphqlTypes'
import { AppState } from 'Config/appState'
import { Casting } from '../../Components/Casting'
import { getCasting } from '../../selectors'
import { getCastingAsync } from '../../actions'

interface PropsState {
    casting: CastingQuery_casting
    isFetching: boolean
}

type RouteProps = RouteComponentProps<{ id: string }>

type Props = PropsState & RouteProps & typeof mapDispatchToProps

export const CastingContainerPure: React.FC<Props> = ({
    casting,
    getCasting,
    match,
    isFetching
}) => {
    const { id } = match.params

    React.useEffect(() => {
        getCasting({ id })
    }, [id])

    if (isFetching || !casting) {
        return <p>loading</p>
    }

    return <Casting casting={casting} />
}

const mapStateToProps = (state: AppState, { match }: RouteProps) => ({
    casting: getCasting(state, match.params.id),
    isFetching: state.castings.isFetchingCasting,
    id: match.params.id
})

const mapDispatchToProps = {
    getCasting: getCastingAsync.request
}

export const CastingContainer = compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(CastingContainerPure) as React.ComponentType
