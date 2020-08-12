import React from 'react';

import './Payments.css';

const Payments = () => {
  return (
    <div className="orders-container">
      <p className="orders-text">Payments</p>
      <div className="orders-line">
        <div
          style={{
            border: '2px solid #27AE60',
            width: '80%',
            borderRadius: '2px 0 0 2px',
          }}
        ></div>
        <div
          style={{
            border: '2px solid #FDC203',
            width: '20%',
            borderRadius: '0 2px 2px 0 ',
          }}
        ></div>
      </div>
      <p className="orders-text">
        Un-reconcilled Payments : <span style={{ color: '#FDC203' }}>20</span>
      </p>
      <p className="orders-text">
        Reconciled Payments: <span style={{ color: '#27AE60' }}>80</span>
      </p>
      <p className="orders-text">
        Total Payments: <span style={{ color: '#1875F0' }}>100</span>
      </p>
    </div>
  );
};

export default Payments;
