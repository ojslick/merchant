import React from 'react';

import Graph from './Images/SmallGraph.jpg';

import './TransactionCard.css';

const TransactionCard = ({ title, figure }) => {
  return (
    <div className="transaction-card-container">
      <div>
        <p className="transaction-card-transaction-text">{title}</p>
        <p className="transaction-card-daily-transaction-figure">{figure}</p>
      </div>
      <img src={Graph} alt="graph" />
    </div>
  );
};

export default TransactionCard;
