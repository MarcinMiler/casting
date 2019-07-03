import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Config/appState'
import { getCastingsLatLng } from 'Modules/Casting/selectors'
import { Map } from 'Components'

interface Position {
    lat: number
    lng: number
}

interface StateProps {
    markers: Position[]
}

export const MapCastingsContainerPure: React.FC<StateProps> = ({ markers }) => (
    <Map markers={markers} />
)

const mapStateToProps = (state: AppState) => ({
    markers: getCastingsLatLng(state)
})

export const MapCastingsContainer = connect(mapStateToProps)(
    MapCastingsContainerPure
)
