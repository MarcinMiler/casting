import * as React from 'react'

import { StyledLink } from 'Components'
import { Container } from './style'

interface Props {
    casting: any
}

export const Casting: React.FC<Props> = ({ casting }) => (
    <StyledLink to={`/casting/${casting.id}`}>
        <Container data-testid="casting-item">
            <h1>{casting.title}</h1>
        </Container>
    </StyledLink>
)

export * from './CastingsPlaceholder'
