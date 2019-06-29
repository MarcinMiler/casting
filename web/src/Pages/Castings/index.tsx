import * as React from 'react'

import { CastingsContainer } from 'Modules/Casting/Containers/Castings'
import { Map } from 'Components'
import { Container, CastingsWrapper, MapWrapper } from './style'

const CastingsPage: React.FC = () => (
    <Container>
        <CastingsWrapper>
            <CastingsContainer />
        </CastingsWrapper>
        <MapWrapper>
            <Map />
        </MapWrapper>
    </Container>
)

export default CastingsPage
