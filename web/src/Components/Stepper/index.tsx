import * as React from 'react'

import { StepperWrapper, StepperFill } from './style'

export interface Props {
    step: number
    maxSteps: number
}

export const Stepper: React.FC<Props> = ({ step, maxSteps }) => (
    <StepperWrapper>
        <StepperFill step={step} maxSteps={maxSteps} />
    </StepperWrapper>
)
