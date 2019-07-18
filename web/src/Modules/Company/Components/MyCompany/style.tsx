import styled from 'styled-components'

export const Container = styled.div`
    width: 120px;
    height: 120px;
    margin: 20px;
    border-radius: 4px;
    background-image: url('https://mir-s3-cdn-cf.behance.net/user/230/4cd0fa43932699.57f2123fc4bbb.png');
    background-size: contain;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        box-shadow: 0px 0px 15px lightgray;
        transform: scale(1.05);
    }
`
