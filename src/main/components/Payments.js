import React from 'react';

import './Payments.css';

const Payments = ({ reconciledPayments, unReconciledPayments }) => {
  console.log(
    (reconciledPayments / (unReconciledPayments + reconciledPayments)) * 100
  );
  return (
    <div className="orders-container">
      <p className="orders-text">Payments</p>
      <div className="orders-line">
        <div
          style={{
            border: '2px solid #27AE60',
            width: `${
              (reconciledPayments /
                (unReconciledPayments + reconciledPayments)) *
              100
            }%`,
            borderRadius: '2px 0 0 2px',
          }}
        ></div>
        <div
          style={{
            border: '2px solid  #FDC203',
            width: `${
              (unReconciledPayments /
                (unReconciledPayments + reconciledPayments)) *
              100
            }%`,
            borderRadius: '0 2px 2px 0',
          }}
        ></div>
      </div>
      <p className="orders-text">
        Un-reconcilled Payments :{' '}
        <span style={{ color: '#FDC203' }}>{unReconciledPayments}</span>
      </p>
      <p className="orders-text">
        Reconciled Payments:{' '}
        <span style={{ color: '#27AE60' }}>{reconciledPayments}</span>
      </p>
      <p className="orders-text">
        Total Payments:{' '}
        <span style={{ color: '#1875F0' }}>
          {unReconciledPayments + reconciledPayments}
        </span>
      </p>
    </div>
  );
};

export default Payments;
