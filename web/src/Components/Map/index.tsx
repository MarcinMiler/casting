import * as React from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'

const deafultPosition = {
    lat: 52.0685,
    lng: 19.9475
}

interface Props {
    onClick?: (e: any) => void
}

export const Map: React.FC<Props> = ({ onClick }) => (
    <LeafletMap center={deafultPosition} zoom={6} onClick={onClick && onClick}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'"
        />
    </LeafletMap>
)
