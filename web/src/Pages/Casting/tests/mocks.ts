import { CastingQuery } from 'ApolloGraphQl'
import { graphqlMock } from 'TetsUtils'

export const castingMock = graphqlMock({
    query: CastingQuery,
    data: {
        casting: {
            id: 1,
            title: 'Casting do Top Model',
            description: 'Opis',
            city: 'Wrocław',
            startDate: '22.06.2019',
            duration: '12h'
        }
    },
    variables: {
        id: '1'
    }
})
