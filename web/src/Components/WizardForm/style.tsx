import styled from 'styled-components'

export const Container = styled.div`
    min-width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 5px 15px lightgray;
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Button = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    background-color: #ed365b;
    color: white;
    font-size: 14px;
    outline: none;
    cursor: pointer;
`
export const SubmitButton = styled.button`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    background-color: #ed365b;
    color: white;
    font-size: 14px;
    outline: none;
    cursor: pointer;
`
