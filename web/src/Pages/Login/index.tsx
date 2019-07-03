import * as React from 'react'

import { SwitchForm } from './SwitchForm'
import { Container, SidePanel, VideoPanel } from './style'

const LoginPage: React.FC = () => (
    <Container>
        <SidePanel>
            <SwitchForm />
        </SidePanel>

        <VideoPanel />
    </Container>
)

export default LoginPage
