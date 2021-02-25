import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { StyledSuccess } from './StyledSuccess';
import { Map } from '../../components';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  console.log(buyer[0].name)
  console.log(state)
  return (
    <StyledSuccess>
      <div className="success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu ubicación</span>
      </div>
      <div className="success-map">
        <Map/>
      </div>
    </StyledSuccess>
  );
};

export default Success;
