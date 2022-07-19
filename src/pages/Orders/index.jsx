import React from 'react';
import {OrderSummary} from '../../components/OrderSummary';
import './Orders.scss';

function Orders (props) {
  return (
<div className="Orders">
  <div className="Orders-container">
    <h1 className="Orders-title">My orders</h1>
    <OrderSummary />
    <OrderSummary />
    <OrderSummary />
  </div>
</div>

  );
} 

export {Orders}  ;