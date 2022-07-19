import React from 'react';
import './OrderItem.scss' //OrderItem for the teacher
import iconClose from '@icons/icon_close.png';

function OrderItem (props) {
  return (
    <div className="orderItem">
      <figure className="orderItem__img">
        <img src="https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt className="orderItem__img" />
      </figure>
      <p className="orderItem__name">Kindle Paperwhite 10ma Gen</p>
      <p className="orderItem__price">$129,00</p>
      <img src={iconClose} alt="close" />
    </div>

  );
}

export {OrderItem} ;