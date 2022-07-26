import React from 'react';
import './ProductInfo.scss';

function ProductDetail(props) { 
  return (

      <div>
        <img src="https://images.pexels.com/photos/844734/pexels-photo-844734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Kindle" className="product-detail__img" />
        <div className="product-info">
          <p className="product-detail__price">
            $129,00
          </p>
          <p className="product-detail__name">
            Kindle Paperwhite 10th Gen
          </p>
          <p className="product-detail__description">
            Kindle Paperwhite is thin, lightweight, and travels easily so you can enjoy your favorite books at any time. With our signature 300 ppi glare-free Paperwhite display—now 10% brighter at its max setting—you can read in any light. And now, a single battery charge via USB-C lasts up to 10 weeks. Battery life may vary depending on use.
          </p>
          <button className="button button--primary add-to-cart-button">
            <i className="button__icon" /> Add to cart
          </button>
        </div>
      </div>

  );
}

export {ProductDetail} ; 