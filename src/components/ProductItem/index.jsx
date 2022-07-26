import React, { useState, useContext } from 'react';
import './ProductItem.scss';
import {AppContext} from '@context/AppContext';

import iconAddCart from '@icons/bt_add_to_cart.svg'; 

function ProductItem({product}) {
  const { addToCart } = useContext(AppContext);

  const handleClick = (toAddProduct) => {
    addToCart(toAddProduct);
  }
  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} className="product-item__img" />
      <div className="item-info">
        <div className="item-text">
          <p className="item-text__price">${product.price}</p>
          <p className="item-text__name">{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} className="item-info__icon">
          <img src={iconAddCart} alt />
        </figure>
      </div>
    </div>

  );
}

export {ProductItem};