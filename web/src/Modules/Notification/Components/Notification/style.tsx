import styled from 'styled-components'
import { FiCheckCircle, FiX, FiXOctagon } from 'react-icons/fi'

import { fonts } from 'Theme'
import { NotificationTypes } from 'Modules/Notification/models'

interface IndicatorProps {
    type: NotificationTypes
}

export const Container = styled.div`
    width: 500px;
    height: 100px;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    border-radius: 4px;
    background-color: white;
    z-index: 9999;
`
export const Indicator = styled.div<IndicatorProps>`
    width: 4px;
    height: 100%;
    background-color: ${({ type }) =>
        type === NotificationTypes.SUCCEED ? '#7adb68' : '#f05f5f'};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`
export const WrapperIcon = styled.div`
    margin: 0 30px 0 15px;
    display: flex;
    align-items: center;
`
export const CheckIcon = styled(FiCheckCircle)`
    color: #7adb68;
    font-size: 48px;
`
export const FailureIcon = styled(FiXOctagon)`
    color: #f05f5f;
    font-size: 48px;
`
export const NotificationTitle = styled.h3`
    margin-top: 20px;
    font-size: ${fonts.medium};
    font-weight: 400;
`
export const CloseIcon = styled(FiX)`
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 24px;
    color: black;
    cursor: pointer;
`
