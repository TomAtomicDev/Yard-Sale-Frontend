import React from 'react';
import {ProductInfo} from '../../components/ProductInfo';
import './ProductDetail.scss';
import iconClose from '@icons/icon_close.png';

function ProductDetail (props) {
  return (
    <aside className="product-detail">
      <div className="product-detail__icon-container">
        <img className="product-detail__icon-close" src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>

  );
}

export  {ProductDetail}; 