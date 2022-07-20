import React, { useState } from 'react';
import './ProductItem.scss';

import iconAddCart from '@icons/bt_add_to_cart.svg'; 

function ProductItem({product}) {
  const [cart, setCart]= useState([]);

  const handleClick = (event) => {
    setCart([]);s
  }
  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} className="product-item__img" />
      <div className="item-info">
        <div className="item-text">
          <p className="item-text__price">${product.price}</p>
          <p className="item-text__name">{product.title}</p>
        </div>
        <figure onClick={handleClick} className="item-info__icon">
          <img src={iconAddCart} alt />
        </figure>
      </div>
    </div>

  );
}

export {ProductItem};