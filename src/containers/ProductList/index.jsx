import React from 'react';
import {ProductItem} from '../../components/ProductItem';
import './ProductList.scss';

function ProductList (props) {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>

  );
}

export {ProductList} ;