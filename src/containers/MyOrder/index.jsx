import React from 'react';
import {OrderSummary} from '../../components/OrderSummary';
import {OrderItem} from '../../components/OrderItem';
import './myOrder.scss';

import iconArrow from '@icons/flechita.svg';

function MyOrder (props) {
  return (
    <aside className="my-order">
      <div className="my-order-container">
        <div className="my-order__titleContainer">
          <img src={iconArrow} alt="arrow" className="logo"/>
          <h1 className="title order-title">My order</h1>
        </div>

        <div className="order-products">
          <OrderItem />
        </div>
        <OrderSummary />
        <button classname="primary-button">
          Checkout
        </button>
        
      </div>
    </aside>

  );
}

export {MyOrder} ;

