import * as React from 'react'
import { cleanup, waitForElement, getByTestId } from '@testing-library/react'
import { Route } from 'react-router-dom'
import 'jest-dom/extend-expect'

import { MockProvider, createClient, renderWithProviders } from 'TetsUtils'
import { castingMock } from './mocks'
import CastingsPage from '..'

describe('Casting Component', () => {
    afterEach(cleanup)

    it('should fetch casting', async () => {
        const client = createClient(castingMock)

        const { container } = renderWithProviders(
            <Route
                path="/casting/:id"
                component={() => (
                    <MockProvider client={client} mocks={castingMock}>
                        <CastingsPage />
                    </MockProvider>
                )}
            />,
            { route: '/casting/1' }
        )

        await waitForElement(() => getByTestId(container, 'casting'))
    })
})
