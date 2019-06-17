import styled from 'styled-components'

import { Props } from '.'

export const StepperWrapper = styled.div`
    width: 100%;
    height: 10px;
    background-color: #eceeed;
`
export const StepperFill = styled.div<Props>`
    width: ${p => (p.step * 100) / p.maxSteps}%;
    height: 10px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #00a597;
    transition: width 200ms ease;
`
