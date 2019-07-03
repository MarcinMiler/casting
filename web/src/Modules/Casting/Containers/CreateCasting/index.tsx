import * as React from 'react'
import { connect } from 'react-redux'

import { CreateCastingForm } from '../../Components/CreateCastingForm'
import { createCastingAsync } from '../../actions'

type Props = typeof mapDispatchToProps

export const CreateCastingContainerPure: React.FC<Props> = props => (
    <CreateCastingForm {...props} />
)

const mapDispatchToProps = {
    createCasting: createCastingAsync.request
}

export const CreateCastingContainer = connect(
    null,
    mapDispatchToProps
)(CreateCastingContainerPure)
