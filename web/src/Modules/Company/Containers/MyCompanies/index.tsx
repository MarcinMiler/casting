import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Config/appState'
import { MyCompaniesQuery_myCompanies } from 'GraphqlTypes'
import { getMyCompaniesAsync } from 'Modules/Company/actions'
import { MyCompaniesList } from 'Modules/Company/Components/MyCompaniesList'

interface PropsState {
    myCompanies: MyCompaniesQuery_myCompanies[]
}

type Props = PropsState & typeof mapDispatchToProps

export const MyCompaniesContainerPure: React.FC<Props> = ({
    getMyCompanies,
    ...props
}) => {
    React.useEffect(() => {
        getMyCompanies()
    }, [])

    return <MyCompaniesList {...props} />
}

const mapStateToProps = (state: AppState) => ({
    myCompanies: state.company.myCompanies
})

const mapDispatchToProps = {
    getMyCompanies: getMyCompaniesAsync.request
}

export const MyCompaniesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCompaniesContainerPure)
