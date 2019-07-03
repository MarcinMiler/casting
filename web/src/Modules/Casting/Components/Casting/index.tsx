import * as React from 'react'

import { Casting as CastingType } from 'Modules/Casting/models'

interface Props {
    casting: CastingType
}

export const Casting: React.FC<Props> = ({ casting }) => <p>{casting.title}</p>
