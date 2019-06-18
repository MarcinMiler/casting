import * as React from 'react'

import { Stepper } from 'Components/Stepper'
import { Container, Row, Button, SubmitButton } from './style'

interface Props {
    step: number
    maxSteps: number
    prevPage: () => void
    nextPage: () => void
    pages: JSX.Element[]
}

export const WizardForm: React.FC<Props> = ({
    step,
    maxSteps,
    prevPage,
    nextPage,
    pages
}) => (
    <Container>
        <Stepper step={step} maxSteps={maxSteps} />

        {pages[step - 1]}
        <Row>
            <Button onClick={prevPage}>Prev</Button>

            {step < maxSteps ? (
                <Button onClick={nextPage}>Next</Button>
            ) : (
                <SubmitButton type="submit">Submit</SubmitButton>
            )}
        </Row>
    </Container>
)
