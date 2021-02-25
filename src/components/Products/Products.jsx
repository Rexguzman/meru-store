import React, {useContext} from 'react'
import Product from '../Product/Product'
import AppContext from '../../context/AppContext';
import { StyledProducts } from './StyledProducts'

const Products = () => {
    const {state, addToCart} = useContext(AppContext);
    const {products} = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    }

    return (
        <StyledProducts>
            <div>
                {products.map( product =>  (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </StyledProducts>
    )
}

export default Products
