import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { AppState } from 'Config/appState'
import { Casting } from 'Modules/Casting/Components/Casting'
import { Casting as CastingType } from 'Modules/Casting/models'
import { getCastings } from 'Modules/Casting/selectors'

interface PropsState {
    casting: CastingType
}

type Props = PropsState & RouteComponentProps<{ id: string }>

export const CastingContainerPure: React.FC<Props> = ({ casting }) => (
    <Casting casting={casting} />
)

const mapStateToProps = (state: AppState) => ({
    casting: getCastings(state)[1]
})

export const CastingContainer = connect(mapStateToProps)(
    withRouter(CastingContainerPure)
)
