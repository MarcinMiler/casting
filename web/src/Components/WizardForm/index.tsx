import * as React from 'react'
import { Container, Row, Button } from './style'

interface Props {
    step: number
    maxSteps: number
    prevPage: () => void
    nextPage: () => void
}

export const WizardForm: React.FC<Props> = ({
    step,
    maxSteps,
    prevPage,
    nextPage
}) => (
    <Container>
        <Row>
            <Button onClick={prevPage}>Prev</Button>

            {step < maxSteps ? (
                <Button onClick={() => nextPage()}>Next</Button>
            ) : (
                <Button type="submit">Submit</Button>
            )}
        </Row>
    </Container>
)
