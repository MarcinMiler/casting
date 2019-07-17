import {
    CreateCompanyMutationVariables,
    CreateCompanyMutation as CreateCompanyMutationType,
    CompanyQuery_company
} from 'GraphqlTypes'
import { CreateCompanyMutation } from 'GraphqlQueries'
import { GraphqlService } from 'Common/Services/graphqlService'

export interface CreateCompanyResponse {
    data: {
        createCompany: CompanyQuery_company
    }
}

export class CompanyService {
    constructor(private readonly graphqlService: GraphqlService) {}

    createCompany(
        variables: CreateCompanyMutationVariables
    ): Promise<CreateCompanyResponse> {
        return this.graphqlService.mutation<
            CreateCompanyMutationType,
            CreateCompanyMutationVariables
        >(CreateCompanyMutation, variables)
    }
}
