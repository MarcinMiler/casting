import * as React from 'react'

import { MyCompany } from '../../Components/MyCompany'

interface Props {}

export const MyCompaniesContainer: React.FC<Props> = () => (
    <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
            <MyCompany />
        ))}
    </>
)
