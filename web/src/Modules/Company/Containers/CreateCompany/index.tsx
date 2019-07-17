import * as React from 'react'
import { connect } from 'react-redux'

import { CreateCompanyForm } from 'Modules/Company/Components/CreateCompanyForm'
import { createCompanyAsync } from 'Modules/Company/actions'

type Props = typeof mapDispatchToProps

export const CreateCompanyContainerPure: React.FC<Props> = props => (
    <CreateCompanyForm {...props} />
)

const mapDispatchToProps = {
    createCompany: createCompanyAsync.request
}

export const CreateCompanyContainer = connect(
    null,
    mapDispatchToProps
)(CreateCompanyContainerPure)
