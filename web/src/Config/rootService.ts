import { client } from 'Config/apolloClient'
import { GraphqlService } from 'Common/Services/Graphql'
import { RoutingService } from 'Common/Services/Routing'
import { CastingService } from 'Modules/Casting/service'
import { AuthService } from 'Modules/Auth/service'
import { CompanyService } from 'Modules/Company/service'
import { history } from './history'

export const graphqlService = new GraphqlService(client)
export const routingService = new RoutingService(history)
export const castingService = new CastingService(graphqlService)
export const authService = new AuthService(graphqlService)
export const companyService = new CompanyService(graphqlService)
