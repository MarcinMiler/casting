import { CastingsQuery } from 'graphql'
import { graphqlMock } from 'TetsUtils'

export const castingMock = graphqlMock({
    query: CastingsQuery,
    data: {
        castings: [
            {
                id: 1,
                title: 'Casting do Top Model',
                description: 'Opis',
                city: 'Wrocław',
                startDate: '22.06.2019',
                duration: '12h'
            },
            {
                id: 2,
                title: 'Casting do Reklamy',
                description: 'Opis',
                city: 'Wrocław',
                startDate: '22.06.2019',
                duration: '12h'
            },
            {
                id: 3,
                title: 'Casting Pure Models',
                description: 'Opis',
                city: 'Wrocław',
                startDate: '22.06.2019',
                duration: '12h'
            }
        ]
    }
})
