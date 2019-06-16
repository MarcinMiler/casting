import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import { CastingQuery } from 'ApolloGraphQl'
import { Container } from './style'

interface Params {
    id: string
}

interface Props extends RouteComponentProps<Params> {}

const CastingPage: React.FC<Props> = ({ match }) => {
    const { data, loading } = useQuery(CastingQuery, {
        variables: {
            id: match.params.id
        }
    })

    return (
        <Container>
            {!loading && (
                <div data-testid="casting">{JSON.stringify(data.casting)}</div>
            )}
        </Container>
    )
}

export default withRouter(CastingPage)
