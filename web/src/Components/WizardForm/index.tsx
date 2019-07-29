import * as React from 'react'
import { isEmpty } from 'ramda'
import { FormikErrors } from 'formik'

import { Stepper } from 'Components/Stepper'
import { Container, Row, Button, SubmitButton } from './style'

interface Props {
    step: number
    maxSteps: number
    prevPage: () => void
    nextPage: () => void
    pages: JSX.Element[]
    validateForm: () => Promise<FormikErrors<any>>
}

export const WizardForm: React.FC<Props> = ({
    step,
    maxSteps,
    prevPage,
    nextPage,
    pages,
    validateForm
}) => {
    const next = async () => {
        const errors = await validateForm()

        if (!isEmpty(errors)) return

        nextPage()
    }

    return (
        <Container>
            <Stepper step={step} maxSteps={maxSteps} />

            {pages[step - 1]}
            <Row>
                <Button onClick={prevPage}>Prev</Button>

                {step < maxSteps ? (
                    <Button onClick={next}>Next</Button>
                ) : (
                    <SubmitButton type="submit">Submit</SubmitButton>
                )}
            </Row>
        </Container>
    )
}
