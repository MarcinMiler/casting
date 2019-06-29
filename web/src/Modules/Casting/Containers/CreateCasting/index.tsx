import * as React from 'react'

import { connect } from 'react-redux'
import { CreateCastingForm } from '../../Components/CreateCastingForm'
import { createCastingRequest } from '../../actions'

type Props = typeof mapDispatchToProps

export const CreateCastingContainerPure: React.FC<Props> = ({
    createCastingRequest
}) => <CreateCastingForm createCasting={createCastingRequest} />

const mapDispatchToProps = {
    createCastingRequest
}

export const CreateCastingContainer = connect(
    null,
    mapDispatchToProps
)(CreateCastingContainerPure)
