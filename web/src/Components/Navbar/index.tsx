import * as React from 'react'

import { Container, StyledLink } from './style'

interface Props {}

export const Navbar: React.FC<Props> = () => (
    <Container>
        <StyledLink to="/home">Home</StyledLink>
    </Container>
)
