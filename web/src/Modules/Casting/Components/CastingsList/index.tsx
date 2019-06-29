import * as React from 'react'

import { Casting as CastingType } from 'Modules/Casting/models'
import { Casting } from '../CastingItem'

interface Props {
    castings: CastingType[]
}

export const CastingsList: React.FC<Props> = ({ castings }) => (
    <>
        {castings.map(casting => (
            <Casting key={casting.id} casting={casting} />
        ))}
    </>
)
