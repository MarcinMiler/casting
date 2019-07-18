import * as React from 'react'

import { StyledLink } from 'Components'
import { Container } from './style'

interface Props {}

export const MyCompany: React.FC<Props> = () => (
    <StyledLink to="/castings">
        <Container />
    </StyledLink>
)
