import * as React from 'react'

import { Navbar } from 'Components'
import { CastingsContainer } from 'Modules/Casting/Containers/Castings'
import { MapCastingsContainer } from 'Modules/Casting/Containers/Map'
import { Container, MapWrapper } from './style'

const CastingsPage: React.FC = () => (
    <>
        <Navbar />
        <Container>
            <CastingsContainer />
            <MapWrapper>
                <MapCastingsContainer />
            </MapWrapper>
        </Container>
    </>
)

export default CastingsPage
