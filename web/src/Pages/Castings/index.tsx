import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { CastingsQuery } from 'ApolloGraphQl'
import { CastingsQuery as CastingsQueryType } from 'GraphqlTypes/CastingsQuery'

import { Casting, CastingsPlaceholder } from './Components/Casting'
import { Map } from './Components/Map'
import { Container, CastingsWrapper, MapWrapper } from './styles'

interface Props {}

const CastingsPage: React.FC<Props> = () => {
    const { data, loading } = useQuery<CastingsQueryType>(CastingsQuery)

    return (
        <Container>
            <CastingsWrapper>
                {loading || !data || !data.castings ? (
                    <CastingsPlaceholder />
                ) : (
                    data.castings.map(casting => (
                        <Casting key={casting.id} casting={casting} />
                    ))
                )}
            </CastingsWrapper>
            <MapWrapper>
                <Map />
            </MapWrapper>
        </Container>
    )
}

export default CastingsPage
