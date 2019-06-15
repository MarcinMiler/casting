import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { CastingsQuery } from 'graphql'
import { Casting, CastingsPlaceholder } from './Components/Casting'
import { Container, CastingsWrapper } from './styles'

interface Props {}

const CastingsPage: React.FC<Props> = () => {
    const { data, loading } = useQuery(CastingsQuery)

    return (
        <Container>
            <CastingsWrapper>
                {loading ? (
                    <CastingsPlaceholder />
                ) : (
                    data.castings.map((casting: any) => (
                        <Casting key={casting.id} casting={casting} />
                    ))
                )}
            </CastingsWrapper>
        </Container>
    )
}

export default CastingsPage
