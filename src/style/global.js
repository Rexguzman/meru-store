import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        font-family: 'Nunito Sans', sans-serif;
        scroll-behavior: smooth;
    }
    body {
        transition: all 0.25s linear;
        text-rendering: optimizeLegibility;
        min-height: 100vh;
    }
    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 5px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: cornflowerblue;
    }
    a {
        text-decoration: none;
    }
    figure {
        margin: 0;
        padding:0;
    }
    h1 {
        font-size: 3.5rem;
        font-weight: 400;
    }
    h2 {
        font-size: 3rem;
        font-weight: 400;
    }
    h3 {
        font-size: 2.5rem;
        font-weight: 400;
    }
    p {
        font-size: 1.6rem
    }
`;
