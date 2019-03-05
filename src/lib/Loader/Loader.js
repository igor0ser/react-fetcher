import React from 'react';
import './Loader.css';

export const Loader = () => (
  <div className="react-fetcher-loading">
    <div className="react-fetcher-spinner">
      <i className="react-fetcher-spinner__item" />
      <i className="react-fetcher-spinner__item" />
      <i className="react-fetcher-spinner__item" />
      <i className="react-fetcher-spinner__item" />
    </div>
  </div>
);
