import React from 'react';

import './Orders.css';

const Orders = ({ pendingOrders, reconciledOrders }) => {
  return (
    <div className="orders-container">
      <p className="orders-text">Orders</p>
      <div className="orders-line">
        <div
          style={{
            border: '2px solid #27AE60',
            width: `${
              (reconciledOrders / (pendingOrders + reconciledOrders)) * 100
            }%`,
            borderRadius: '2px 0 0 2px',
          }}
        ></div>
        <div
          style={{
            border: '2px solid #FDC203',
            width: `${
              (pendingOrders / (pendingOrders + reconciledOrders)) * 100
            }%`,
            borderRadius: '0 2px 2px 0 ',
          }}
        ></div>
      </div>
      <p className="orders-text">
        Pending Orders:{' '}
        <span style={{ color: '#FDC203' }}>{pendingOrders}</span>
      </p>
      <p className="orders-text">
        Reconciled Orders: <span>{reconciledOrders}</span>
      </p>
      <p className="orders-text">
        Total Orders:{' '}
        <span style={{ color: '#1875F0' }}>
          {pendingOrders + reconciledOrders}
        </span>
      </p>
    </div>
  );
};

export default Orders;
