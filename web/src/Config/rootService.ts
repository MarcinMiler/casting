import { client } from 'Config/apolloClient'
import { GraphqlService } from 'Common/Services/graphqlService'
import { CastingService } from 'Modules/Casting/service'

export const graphqlService = new GraphqlService(client)
export const castingService = new CastingService(graphqlService)
