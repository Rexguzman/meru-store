import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { StyledInformation } from './StyledInformation';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      adress: formData.get('adress'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      zp: formData.get('zp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <StyledInformation>
      <div className="hero-img">
        <h2>Información de contacto:</h2>
      </div>
      <div className="form-sidebar-containe">

      
      <div className="information-content">
        <div className="information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Apartamento" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="zp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="information-item">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      </div>
      <div className="information-buttons">
        <Link to="/checkout">
          <button className="information-back">Regresar</button>
        </Link>

        <button className="information-next" onClick={handleSubmit}>
          Pagar
        </button>
      </div>
    </StyledInformation>
  );
};

export default Information;
