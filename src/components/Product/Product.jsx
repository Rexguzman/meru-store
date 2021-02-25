import React from 'react';
import {StyledProduct} from './StyledProduct';

const Product = ({ product, handleAddToCart }) => {
  return (
    <StyledProduct>
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div>
        <h2>
          {product.title}
          <span>{` $ ${product.price}`}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </StyledProduct>
  );
};

export default Product;
