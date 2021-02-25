import styled from 'styled-components';

export const StyledPayment = styled.section`
  .hero-img {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 150px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('https://i.imgur.com/h0XhfDZ.jpg');
    margin-bottom: 20px;
  }
  .information-item {
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
  }
  .information-item h4,
  .information-item span {
    font-size: 1.4rem;
    margin: 15px 0;
  }
  .payment-buttons {
    margin: 0 15px;
  }
  .payment-content {
    width: 100%;
  }
  .payment-container {
    display: flex;
    flex-direction: column;

    max-width: 1110px;
    margin: auto;
  }
  @media (min-width: 768px) {
    .payment-container {
      flex-flow: nowrap;
    }
    .payment-buttons {
    width: 100%;
  }
  }
`;
