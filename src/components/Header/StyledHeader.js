import styled from 'styled-components';

export const StyledHeader = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    max-width: 1110px;
    margin: auto;

    figure {
        margin: 0;
        padding: 0;
    }
    figure img {
        width: 100px;
        height: 100px;
    }
    nav {
        display: flex;
    }
    a {
        width: 30px;
        color: black;
    }
    .items-count{
        border-radius: 45%;
    background-color: red;
    height: 20px;
    width: 20px;
    text-align: center;
    color: white;
    font-size: 1.6rem;
    }
`;
