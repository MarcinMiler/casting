import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 30px;
    display: flex;
    justify-content: flex-end;
`
export const StyledLink = styled(Link)`
    font-size: ${props => props.theme.fontSize.base};
    color: black;
    text-decoration: none;
`
