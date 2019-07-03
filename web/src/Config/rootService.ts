import { client } from 'Config/apolloClient'
import { GraphqlService } from 'Common/Services/graphqlService'
import { CastingService } from 'Modules/Casting/service'
import { AuthService } from 'Modules/Auth/service'

export const graphqlService = new GraphqlService(client)
export const castingService = new CastingService(graphqlService)
export const authService = new AuthService(graphqlService)
