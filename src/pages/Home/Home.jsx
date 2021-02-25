import React from 'react';
import { StyledHome } from './StyledHome';
import initialState from '../../initialState';

import {Products} from '../../components';

const Home = () => (
  <StyledHome>   
    <figure className="hero-img">
    </figure>
    <Products products={initialState.products}/>
  </StyledHome>
);

export default Home;
