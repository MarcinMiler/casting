import * as React from 'react'
import { useDispatch } from 'react-redux'
import { registerNotificationSucceed } from 'Modules/Notification/factory'

const Home = () => {
    const dispatch = useDispatch()
    return (
        <p
            onClick={() =>
                dispatch({
                    type: 'SHOW_NOTIFICATION',
                    payload: registerNotificationSucceed()
                })
            }
        >
            home
        </p>
    )
}

export default Home
