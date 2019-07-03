import styled from 'styled-components'

import { fonts } from 'Theme'

interface InputProps {
    noBorderBottom: boolean
}

export const Container = styled.div`
    width: 100%;
    position: relative;
`
export const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 80px;
    padding: 25px 25px 0 25px;
    border: 2px solid #e8e8e8;
    border-bottom: ${({ noBorderBottom }) =>
        noBorderBottom ? 'none' : '2px solid #e8e8e8'};
    font-weight: 600;
    font-size: 14px;
    transition: all 200ms ease;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-left: 2px solid #ff1a5d;
    }
`
export const Label = styled.p`
    position: absolute;
    top: 17px;
    left: 25px;
    margin-bottom: 5px;
    color: #a3a3a3;
    font-size: 15px;
`
