import styled from 'styled-components';

export const StyledInformation = styled.section`

  h2 {
    margin: 20px 0;
  }
  .information-form form {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }
  .information-form form {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }
  .information-form form input {
    border-radius: 5px;
    padding: 0 10px;
    height: 2.5rem;
    margin: 5px 0;
    border: 1px solid;
  }
  .information-buttons {
    display: flex;
    flex-direction: column;
    margin: 20px 15px;
    max-width: 1110px;
    margin: auto;
    padding: 0 15px;
  }
  .information-buttons button {
    margin: 10px 0;
    height: 3rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 9px 17px 0 rgb(0 0 0 / 20%), 5px 5px 8px 0 rgb(0 0 0 / 50%);
    position: relative;
    top: -1px;
  }
  .information-buttons a {
    display: flex;
    flex-direction: column;
  }
  .information-buttons .information-back {
    background-color: yellow;
  }
  .information-buttons .information-next {
    background-color: green;
  }
  .information-item {
    display: flex;
    justify-content: space-between;
  }
  .information-sidebar {
    width: 100%;
    margin: 0 15px;
  }
  .information-sidebar h3 {
    margin: 15px 0;
  }
  .information-item h4, .information-item span {
    font-size: 1.4rem;
    margin: 15px 0;
  }
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
      url('https://i.imgur.com/G7DqhzG.jpg');
      margin-bottom: 20px;
  }
  .form-sidebar-containe {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    max-width: 1110px;
    margin: auto;
}
.information-content {
  width: 100%;
  align-self: center;
}
@media (min-width: 768px) {
	.information-content {
  width: 50%;
  }
  .information-sidebar {
    width: 45%;
  }

  .information-buttons {
    flex-flow: nowrap;
  }
  .information-buttons a {
    width: 50%;
    margin-right: 15px;
  }
  .information-buttons > button {
    width: 50%;
    margin-left: 15px;
  }
}
`;
