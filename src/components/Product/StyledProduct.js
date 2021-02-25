import styled from 'styled-components';

export const StyledProduct = styled.div`
  //max-width: 320px;

  figure img {
    width: 250px;
    height: 346.5px;
  }
  button {
    width: 100%;
    height: 4rem;
    background-color: cornflowerblue;
    border: none;
    border-radius: 5px;
    color: black;
    transition: all 0.1s linear;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 9px 17px 0 rgb(0 0 0 / 20%), 5px 5px 8px 0 rgb(0 0 0 / 50%);
    position: relative;
    top: -1px;
  }
  h2 {
    font-weight: 800;
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
  }
  p {
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    max-width: 320px;
  }
`;
