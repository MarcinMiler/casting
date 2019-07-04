import { client } from 'Config/apolloClient'
import { GraphqlService } from 'Common/Services/graphqlService'
import { RoutingService } from 'Common/Services/routingService'
import { CastingService } from 'Modules/Casting/service'
import { AuthService } from 'Modules/Auth/service'
import { history } from './history'

export const graphqlService = new GraphqlService(client)
export const routingService = new RoutingService(history)
export const castingService = new CastingService(graphqlService)
export const authService = new AuthService(graphqlService)
