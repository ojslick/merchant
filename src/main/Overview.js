import React from 'react';

import TransactionCard from './components/TransactionCard';

import './Overview.css';
import Graph from './components/Graph';
import Orders from './components/Orders';
import Payments from './components/Payments';

class Overview extends React.Component {
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  render() {
    return (
      <div className="overview-container">
        <div className="overview-transaction-card-flex">
          <div
            style={{
              width: '48%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TransactionCard
              title="Daily Transaction Volume"
              figure={this.numberWithCommas(2432)}
            />
            <TransactionCard
              title="Daily Transaction Value"
              figure={`₦${this.numberWithCommas(4000000)}`}
            />
          </div>

          <div
            style={{
              width: '48%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TransactionCard
              title="Total Transaction Volume"
              figure={this.numberWithCommas(452000)}
            />
            <TransactionCard
              title="Total Transaction Value"
              figure={`₦${this.numberWithCommas(4000000)}`}
            />
          </div>
        </div>
        <div className="overview-graph-flex">
          <Graph />
          <div className="overview-graph-orders">
            <Orders />
            <Payments />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
