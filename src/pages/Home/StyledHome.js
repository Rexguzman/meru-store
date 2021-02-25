import styled from 'styled-components';

export const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .hero-img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 400px;
    width: 100%;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('https://i.imgur.com/kcgYT3U.jpg');
    margin-bottom: 20px;
  }
`;
