import * as React from 'react'
import { connect } from 'react-redux'

import { CastingQuery_casting } from 'GraphqlTypes'
import { AppState } from 'Config/appState'
import { Casting } from 'Modules/Casting/Components/Casting'
import { getCasting } from 'Modules/Casting/selectors'
import { getCastingAsync } from '../../actions'

interface PropsState {
    casting: CastingQuery_casting
}

interface OwnProps {
    id: string
}

type Props = PropsState & OwnProps & typeof mapDispatchToProps

export const CastingContainerPure: React.FC<Props> = ({
    casting,
    getCasting,
    id
}) => {
    React.useEffect(() => {
        getCasting({ id })
    }, [id])

    if (!casting) {
        return <p>loading</p>
    }

    return <Casting casting={casting} />
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
    casting: getCasting(state, ownProps.id),
    id: ownProps.id
})

const mapDispatchToProps = {
    getCasting: getCastingAsync.request
}

export const CastingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CastingContainerPure)
