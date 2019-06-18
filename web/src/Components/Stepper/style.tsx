import styled from 'styled-components'

import { Props } from '.'

export const StepperWrapper = styled.div`
    width: 100%;
    height: 10px;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #eceeed;
    z-index: 100;
`
export const StepperFill = styled.div<Props>`
    width: ${p => (p.step * 100) / p.maxSteps}%;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #00a597;
    transition: width 200ms ease;
`
