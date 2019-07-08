import * as React from 'react'
import { connect } from 'react-redux'

import { CastingsList } from 'Modules/Casting/Components/CastingsList'
import { Casting } from 'Modules/Casting/models'
import { getCastings } from 'Modules/Casting/selectors'
import { AppState } from 'Config/appState'
import { CastingsQuery_castings } from 'GraphqlTypes'
import { getCastingsAsync, getMoreCastingsAsync } from '../../actions'

interface CastingStateProps {
    castings: CastingsQuery_castings[]
}

type CastingsContainerProps = CastingStateProps & typeof mapDispatchToProps

export const CastingsContainerPure: React.FC<CastingsContainerProps> = ({
    getCastings,
    ...props
}) => {
    React.useEffect(() => {
        getCastings()
    }, [getCastings])

    return <CastingsList {...props} />
}

const mapStateToProps = (state: AppState) => ({
    castings: getCastings(state)
})

const mapDispatchToProps = {
    getCastings: getCastingsAsync.request,
    getMoreCastings: getMoreCastingsAsync.request
}

export const CastingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CastingsContainerPure)
