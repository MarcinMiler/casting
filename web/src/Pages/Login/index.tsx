import * as React from 'react'

import { LoginFormContainer } from 'Modules/Auth/Containers/LoginForm'
import { Container, PanelLogin, VideoPanel } from './style'

const LoginPage: React.FC = () => (
    <Container>
        <PanelLogin>
            <LoginFormContainer />
        </PanelLogin>

        <VideoPanel />
    </Container>
)

export default LoginPage
