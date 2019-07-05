import * as React from 'react'

import { Navbar } from 'Components'
import { CastingsContainer } from 'Modules/Casting/Containers/Castings'
import { MapCastingsContainer } from 'Modules/Casting/Containers/Map'
import { Container, CastingsWrapper, MapWrapper } from './style'

const CastingsPage: React.FC = () => (
    <>
        <Navbar />
        <Container>
            <CastingsWrapper>
                <CastingsContainer />
            </CastingsWrapper>
            <MapWrapper>
                <MapCastingsContainer />
            </MapWrapper>
        </Container>
    </>
)

export default CastingsPage
