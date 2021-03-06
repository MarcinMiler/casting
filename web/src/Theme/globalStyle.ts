import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');
    
    body {
        width: 100%;
        height: 100vh;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    p {
        margin: 0;
    }
    button {
        border: none;
        cursor: pointer;
        
        &:focus {
            outline: none;
        }
    }
    input, textarea {
        border: none;
        font-family: 'Montserrat', sans-serif;
        &:focus {
            outline: none;
        }
    }
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #efefef;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ff506b; 
        border-radius: 25px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #ff1d40; 
    }
`
