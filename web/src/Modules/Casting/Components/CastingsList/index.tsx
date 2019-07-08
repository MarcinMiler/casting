import * as React from 'react'
import { getMoreCastingsAsync } from 'Modules/Casting/actions'
import { CastingsQuery_castings } from 'GraphqlTypes'
import { Casting } from '../CastingItem'
import { CastingsWrapper } from './style'

interface Props {
    castings: CastingsQuery_castings[]
    getMoreCastings: typeof getMoreCastingsAsync.request
}

export const CastingsList: React.FC<Props> = ({
    castings,
    getMoreCastings
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleScroll = (e: any) => {
        if (containerRef.current) {
            const {
                scrollTop,
                scrollHeight,
                offsetHeight
            } = containerRef.current

            if (scrollTop >= scrollHeight - offsetHeight - 200) {
                getMoreCastings({
                    cursor: castings[castings.length - 1].createdAt
                })
            }
        }
    }

    return (
        <CastingsWrapper ref={containerRef} onScroll={e => handleScroll(e)}>
            {castings.map(casting => (
                <Casting key={casting.id} casting={casting} />
            ))}
        </CastingsWrapper>
    )
}
