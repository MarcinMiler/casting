import * as React from 'react'
import { FieldProps } from 'formik'

import { Container, Label, StyledInput } from './style'

interface Props {
    type: string
    label: string
    noBorderBottom?: boolean
}

export const Input: React.FC<FieldProps & Props> = ({
    noBorderBottom = false,
    label,
    type,
    field: { onChange, ...field },
    form: { errors },
    ...props
}) => (
    <Container>
        <Label>{label}</Label>

        <StyledInput
            onChange={onChange}
            type={type}
            noBorderBottom={noBorderBottom}
            {...field}
            {...props}
        />
    </Container>
)
