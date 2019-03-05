import React from 'react';
import './Success.css';

export const Success = ({ data, refresh }) => (
  <div className="react-fetcher-success">
    <pre className="react-fetcher-preview">
      {JSON.stringify(data, null, 2)}
    </pre>
    <button onClick={refresh}>Refresh</button>
  </div>
);
