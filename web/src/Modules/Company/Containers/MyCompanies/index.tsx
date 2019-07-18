import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'Config/appState'
import { MyCompaniesQuery_myCompanies } from 'GraphqlTypes'
import { getMyCompaniesAsync } from 'Modules/Company/actions'
import { MyCompany } from '../../Components/MyCompany'

interface PropsState {
    myCompanies: MyCompaniesQuery_myCompanies[]
}

type Props = PropsState & typeof mapDispatchToProps

export const MyCompaniesContainerPure: React.FC<Props> = ({
    getMyCompanies,
    myCompanies
}) => {
    React.useEffect(() => {
        getMyCompanies()
    }, [])

    return (
        <>
            {myCompanies.map(company => (
                <MyCompany myCompany={company} />
            ))}
        </>
    )
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
