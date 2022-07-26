import React from 'react';
import {ShoppingCartItem} from '../../components/ShoppingCartItem';
import {OrderSummary} from '../../components/OrderSummary';
import './ShoppingCart.scss';
import iconArrow from '@icons/flechita.svg';

function ShoppingCart (props) {
  return (
    <aside className="shopping-cart">
      <div className="icon-container">
        <img className="icon-container--close" src={iconArrow} alt="close" />
      </div>
      <p className="shoppingCart-title">Shopping cart</p>
      <div className="shoppingCart__products">
        <ShoppingCartItem />
        <ShoppingCartItem />
        <ShoppingCartItem />
      </div>
      <OrderSummary />
      <button class="button button--primary">
        Check out
      </button> 
    </aside>
  );
}

export {ShoppingCart} ;