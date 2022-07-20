import React from 'react';
import {ProductItem} from '../../components/ProductItem';
import useGetProducts from '../../hooks/useGetProducts'
import './ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

function ProductList (props) {

  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map( product => {
          return <ProductItem product={product} key={ product.id }/>
        }) }

      </div>
    </section>

  );
}

export {ProductList} ;