import React from 'react';
import './MenuMobile.scss';

function MenuMobile(props) {
  return (
    <div className="mobile-menu">
      <a href="/">
        <i className="icon-close" />
      </a>
      <ul className="mobile-menu__list mobile-menu__categories">
        <li className="mobile-menu__item">
          <p className="mobile-menu__title">CATEGORIES</p>
        </li>
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" href="/">All</a>
        </li>
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" href="/">Clothes</a>
        </li>
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" href="/">Electronics</a>
        </li>
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" href="/">Furnitures</a>
        </li>
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" href="/">Toys</a>
        </li>
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" href="/">Others</a>
        </li>
      </ul>
      <ul className="mobile-menu__list">
        <li className="mobile-menu__item">
          <a href className="mobile-menu__link">My orders</a>
        </li>
        <li className="mobile-menu__item">
          <a href className="mobile-menu__link">My account</a>
        </li>
      </ul>
      <ul className="mobile-menu__list info">
        <li className="info__item">
          <a className="tinny-note" href="/">myadress@example.com</a>
        </li>
        <li className="info__item">
          <a className="tinny-note tinny-note__link" href="/">Sign out</a>
        </li>
      </ul>
    </div>

  );
}

export {MenuMobile} ;