import * as React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { MockedProvider } from 'react-apollo/test-utils'

interface Props {
    client: any
    mocks: any
    children: JSX.Element
}

export const MockProvider: React.FC<Props> = ({ client, mocks, children }) => (
    <ApolloProvider client={client}>
        <MockedProvider mocks={mocks} addTypename={false}>
            {children}
        </MockedProvider>
    </ApolloProvider>
)
