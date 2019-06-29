import * as React from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    return (
        <p onClick={() => dispatch({ type: 'GET_CASTINGS_REQUESTED' })}>home</p>
    )
}

export default Home
