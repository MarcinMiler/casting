import styled from 'styled-components'

import { fonts } from 'Theme'

export const Container = styled.div`
    width: 400px;
    height: 100px;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 5px 15px lightgray;
`
export const NotificationTitle = styled.h3`
    font-size: ${fonts.medium};
    font-weight: 400;
`
