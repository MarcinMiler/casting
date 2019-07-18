import * as React from 'react'

import { Container, Link } from './style'

interface Props {}

export const Navbar: React.FC<Props> = () => (
    <Container>
        <Link to="/castings">New Faces</Link>
        <Link to="/castings">Models</Link>
        <Link to="/castings">Castings</Link>
        <Link to="/my-companies">Manage</Link>
        <Link to="/castings">My Profile</Link>
    </Container>
)
