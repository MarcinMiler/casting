import * as React from 'react'
import { connect } from 'react-redux'

import { CastingsList } from 'Modules/Casting/Components/CastingsList'
import { Casting } from 'Modules/Casting/models'
import { getCastings } from 'Modules/Casting/selectors'
import { AppState } from 'Config/appState'
import { getCastingsRequest } from '../../actions'

interface CastingStateProps {
    castings: Casting[]
}

type CastingsContainerProps = CastingStateProps & typeof mapDispatchToProps

export const CastingsContainerPure: React.FC<CastingsContainerProps> = ({
    castings,
    getCastingsRequest
}) => {
    React.useEffect(() => {
        getCastingsRequest()
    }, [getCastingsRequest])

    return <CastingsList castings={castings} />
}

const mapStateToProps = (state: AppState) => ({
    castings: getCastings(state)
})

const mapDispatchToProps = {
    getCastingsRequest
}

export const CastingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CastingsContainerPure)
