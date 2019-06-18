import * as React from 'react'
import { cleanup, waitForElement, getAllByTestId } from '@testing-library/react'
import 'jest-dom/extend-expect'

import { MockProvider, createClient, renderWithProviders } from 'TetsUtils'
import { castingMock } from './mocks'
import CastingsPage from '..'

describe('Castings Component', () => {
    afterEach(cleanup)

    it('should fetch castings', async () => {
        const client = createClient(castingMock)

        const { container } = renderWithProviders(
            <MockProvider client={client} mocks={castingMock}>
                <CastingsPage />
            </MockProvider>
        )

        const fetchedCastings = await waitForElement(() =>
            getAllByTestId(container, 'casting-item')
        )

        expect(fetchedCastings).toHaveLength(3)
    })

    it('should show placeholder on loading', () => {
        const client = createClient(castingMock)

        const { container } = renderWithProviders(
            <MockProvider client={client} mocks={castingMock}>
                <CastingsPage />
            </MockProvider>
        )

        expect(getAllByTestId(container, 'casting-placeholder')).toHaveLength(8)
        expect(() => getAllByTestId(container, 'casting-item')).toThrowError()
    })
})
