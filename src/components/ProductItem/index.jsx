import React, { useState } from 'react';
import './ProductItem.scss';

import iconAddCart from '@icons/bt_add_to_cart.svg'; 

function ProductItem(props) {
  const [cart, setCart]= useState([]);

  const handleClick = (event) => {
    setCart([]);s
  }
  return (
    <div className="product-item">
      <img src="https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt className="product-item__img" />
      <div className="item-info">
        <div className="item-text">
          <p className="item-text__price">$129,00</p>
          <p className="item-text__name">Kindle Paperwhite 10th Gen</p>
        </div>
        <figure onClick={handleClick} className="item-info__icon">
          <img src={iconAddCart} alt />
        </figure>
      </div>
    </div>

  );
}

export {ProductItem};