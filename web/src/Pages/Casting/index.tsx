import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import { CastingContainer } from 'Modules/Casting/Containers/Casting'
import { Container } from './style'

type Props = RouteComponentProps<{ id: string }>

const CastingPage: React.FC<Props> = ({ match }) => (
    <Container>
        <CastingContainer id={match.params.id} />
    </Container>
)

export default CastingPage
