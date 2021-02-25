import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';
import {
  StyledCheckout,
  StyledSideBar,
  StyledCheckoutContent,
} from './StyledCheckout';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <StyledCheckout>
      <div className="hero-img">
        <h3>Lista de Pedidos:</h3>
      </div>
      <div className="products-sidebar-container">
        <StyledCheckoutContent>
          {cart.length == 0 ? (
            <h2>Tu carrito está vacío</h2>
          ) : (
            cart.map((item) => (
              <div key={item.itemCardId}>
                <div>
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
                <div className="trash-icon" onClick={handleRemove(item)}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trash-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                    ></path>
                  </svg>
                </div>
              </div>
            ))
          )}
        </StyledCheckoutContent>
        <StyledSideBar>
          <hr />
          <h3>
            Precio Total: <span>{`$ ${handleSumTotal()}`}</span>
          </h3>
          <hr />

          {cart.length == 0 ? (
            <button type="button" className="inactive-button">
              Continuar Pedido
            </button>
          ) : (
            <Link to="/checkout/information">
              <button type="button">Continuar Pedido</button>
            </Link>
          )}
        </StyledSideBar>
      </div>
    </StyledCheckout>
  );
};

export default Checkout;
