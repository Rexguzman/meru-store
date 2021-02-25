import styled from 'styled-components';

export const StyledCheckout = styled.section`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;

  .hero-img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 150px;
    width: 100%;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('https://i.imgur.com/X5SOnlN.jpg');
    margin-bottom: 20px;
  }
  .products-sidebar-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1110px;
    width: 100%;
    min-height: 22vh;
    align-items: center;
  }
`;

export const StyledSideBar = styled.div`
  margin: 0 15px;
  width: 100%;

  h3 {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
  button {
    margin: 20px 0;
    width: 100%;
    height: 3.5rem;
    background-color: green;
    border: none;
    border-radius: 5px;
    color: white;
    transition: all 0.1s linear;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 9px 17px 0 rgb(0 0 0 / 20%), 5px 5px 8px 0 rgb(0 0 0 / 50%);
    position: relative;
    top: -1px;
  }
  .inactive-button {
    background-color: darkgray;
    transition: none;
    cursor: not-allowed;
  }
  .inactive-button:hover {
    position: inherit;
    box-shadow: none;
  }
  .inactive-button:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    max-width: 25%;
    align-self: flex-end;
  }
`;

export const StyledCheckoutContent = styled.div`
  margin: 0 15px;
  width: 100%;

  h2 {
    text-align: center;
    margin: 20px 0 40px 0;
  }
  h4 {
    font-size: 1.4rem;
  }
  div {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div > div {
    width: 100%;
  }
  button {
    margin-left: 10px;
    width: 20%;
    height: 2rem;
    background-color: cornflowerblue;
    border: none;
    border-radius: 5px;
    color: white;
    transition: all 0.1s linear;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 9px 17px 0 rgb(0 0 0 / 20%), 5px 5px 8px 0 rgb(0 0 0 / 50%);
    position: relative;
    top: -1px;
  }
  .trash-icon {
    width: 15px;
    margin: 5px;
  }
  .trash-icon:hover {
    width: 20px;
    color: red;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 65%;
  }
`;
