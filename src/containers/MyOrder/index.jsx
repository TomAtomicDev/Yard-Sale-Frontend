import React, { useContext } from 'react';
import {OrderSummary} from '../../components/OrderSummary';
import {OrderItem} from '../../components/OrderItem';
import { AppContext } from '@context/AppContext';
import './MyOrder.scss';

import iconArrow from '@icons/flechita.svg';

function MyOrder (props) {

  const { state: {cart}} = useContext(AppContext);

  const totalPrice = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="my-order">
      <div className="my-order-container">
        <div className="my-order__titleContainer">
          <img src={iconArrow} alt="arrow" className="arrow"/>
          <h1 className="title order-title">My order</h1>
        </div>

        <div className="order-products">
          {cart.map( (product, index) => (
            <OrderItem product={product} key={`order-item-${index}`}  keyIndex={index} />
          ))}
          
        </div>

        <div className="order-summary">
          <p className="order-summary__info">
            <span className="order-summary__date">Total</span>
            <span className="order-summary__count">{cart.length} articles</span>
          </p>
          <p className="order-summary__totalmoney">${totalPrice()}</p>
          
        </div>
        
        <button className="button button--primary">
          Checkout
        </button>
        
      </div>
    </aside>

  );
}

export {MyOrder} ;

