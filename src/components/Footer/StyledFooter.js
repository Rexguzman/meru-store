import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://i.imgur.com/NUWBGAl.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: white;

  figure img {
    width: 200px;
    height: 200px;
    margin: 40px;
  }

  .information {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1110px;
  }

  .footer-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
  }
`;
