import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {ProductItem} from '../../components/ProductItem';
import './ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

function ProductList (props) {

  const [products, setProducts] = useState([]);

  useEffect( () => {
		const getProducts = async () => {
			const response = await axios(API);
      console.log(response.data);
			setProducts(response.data);
		};
		getProducts();
  }, [])

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map( product => {
          return <ProductItem key={ product.id }/>
        }) }

      </div>
    </section>

  );
}

export {ProductList} ;