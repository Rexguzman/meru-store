import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import { StyledPayment } from './StyledPayment';
import AppContext from '../../context/AppContext';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();
  console.log(buyer);
  const paypalOptions = {
    clientId:
      'AZPPWElXmMiwsJIgkw13nAL6MDsz38qPWR7enQLuOBNPBDn35z7Yxicx1kw5kLdRAmuxA-mhKaNEvhhM',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <StyledPayment>
      <h3 className="hero-img">Resumen de tu pedido:</h3>
      <div className="payment-container">
        <div className="payment-content">
          {cart.map((item) => (
            <div className="information-item" key={item.itemCardId}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
        <div className="payment-buttons">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </StyledPayment>
  );
};

export default Payment;
