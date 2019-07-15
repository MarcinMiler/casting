import * as React from 'react'
import { AutoSizer, List, InfiniteLoader } from 'react-virtualized'

import { getMoreCastingsAsync } from 'Modules/Casting/actions'
import { CastingsQuery_castings } from 'GraphqlTypes'
import { Casting } from '../CastingItem'
import { CastingsWrapper } from './style'

interface RowRendererParams {
    index: number
    style: object
}

interface RowLoadedParams {
    index: number
}

interface Props {
    castings: CastingsQuery_castings[]
    getMoreCastings: typeof getMoreCastingsAsync.request
}

export const CastingsList: React.FC<Props> = ({
    castings,
    getMoreCastings
}) => {
    const loadMoreRows = () => {
        getMoreCastings({
            cursor: castings[castings.length - 1].createdAt
        })

        return Promise.resolve()
    }

    const isRowLoaded = ({ index }: RowLoadedParams) => {
        if (castings[index]) {
            return true
        }

        return false
    }

    const Castings = ({ style, index }: RowRendererParams) => (
        <div style={style} key={castings[index].id}>
            <Casting casting={castings[index]} />
        </div>
    )

    return (
        <CastingsWrapper>
            <AutoSizer>
                {({ width, height }) => (
                    <InfiniteLoader
                        rowCount={1000} // <- I need make request for total castings length
                        loadMoreRows={loadMoreRows}
                        isRowLoaded={isRowLoaded}
                    >
                        {({ onRowsRendered, registerChild }) => (
                            <List
                                width={width}
                                height={height}
                                onRowsRendered={onRowsRendered}
                                ref={registerChild}
                                rowCount={castings.length}
                                rowHeight={160}
                                rowRenderer={Castings}
                            />
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </CastingsWrapper>
    )
}
