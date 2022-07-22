import React from 'react';
import './OrderSummary.scss'; // just Order for the teacher... OrderItem

import iconArrow from '@icons/flechita.svg';

function OrderSummary (props) {
  return (
    <div className="order-summary">
      <p className="order-summary__info">
        <span className="order-summary__date">31.Jan.2022</span>
        <span className="order-summary__count">6 articles</span>
      </p>
      <p className="order-summary__totalmoney">$560.00</p>
      {/* <img src={iconArrow} alt="arrow" />                 */}
    </div>

  );
}

export {OrderSummary} ; 