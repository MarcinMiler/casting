import styled from 'styled-components'
import { MdBusiness, MdLocationOn } from 'react-icons/md'

export const Container = styled.div`
    width: 100%;
    height: 130px;
    padding: 20px;
    margin-bottom: 30px;
    display: flex;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 5px 10px #d8d8d8;
    transition: all 200ms ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 5px 25px lightgray;
    }
`
export const Image = styled.img`
    width: 130px;
    height: 70px;
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const CastingTitle = styled.h3`
    color: ${({ theme }) => theme.colors.lightgray};
    font-weight: 600;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
`
export const BuildingIcon = styled(MdBusiness)`
    margin-right: 5px;
    color: #99a1ab;
    font-size: 16px;
`
export const LocationIcon = styled(MdLocationOn)`
    margin: 0 5px 0 10px;
    color: #99a1ab;
    font-size: 16px;
`
export const SmallText = styled.p`
    color: #99a1ab;
    font-size: 12px;
    font-weight: 400;
`
