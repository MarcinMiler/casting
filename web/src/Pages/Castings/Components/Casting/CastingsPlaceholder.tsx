import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 120px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #cacdd1;
    border-radius: 4px;
`

export const CastingsPlaceholder = () => (
    <>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <Container key={i} data-testid="casting-placeholder" />
        ))}
    </>
)
