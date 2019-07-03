import styled from 'styled-components'

import { fonts } from 'Theme'

export const Title = styled.h1`
    margin-bottom: 20px;
    font-size: ${fonts.xLarge};
    font-weight: 400;
`
export const SecondaryTitle = styled.h3`
    margin-bottom: 70px;
    font-size: ${fonts.small};
    font-weight: 400;
    color: gray;
`
export const ButtonsWrapper = styled.div`
    width: 330px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`
export const Button = styled.button`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: ${fonts.small};
    transition: all 0.2s ease;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`
export const LoginButton = styled(Button)`
    background-color: black;
    color: white;
`
export const SignUpButton = styled(Button)`
    background-color: white;
    border: 1px solid lightgray;
`
