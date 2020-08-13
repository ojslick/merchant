import React from 'react';
import _ from 'lodash';

import TransactionCard from './components/TransactionCard';

import './Overview.css';
import Graph from './components/Graph';
import Orders from './components/Orders';
import Payments from './components/Payments';

import PAYMENTS from '../data/dummy-data-payments';
import ORDERS from '../data/dummy-data-payments';

class Overview extends React.Component {
  state = {
    pendingOrders: 0,
    reconciledOrders: 0,
    reconciledPayments: 0,
    unreconciledPayments: 0,
  };

  handleOrders(key) {
    const grouped = _.mapValues(_.groupBy(ORDERS, 'status'));
    return grouped[key].length;
  }

  handlePayments(key) {
    const grouped = _.mapValues(_.groupBy(PAYMENTS, 'status'));
    return grouped[key].length;
  }

  numberWithCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  handleDailyTransactionVolume(transactions) {
    const grouped = _.mapValues(_.groupBy(transactions, 'createdDate'));
    const valuesCount = Object.values(grouped).map(
      (transaction) => transaction.length
    );
    const sum = valuesCount.reduce((a, b) => a + b, 0);
    const average = sum / valuesCount.length || 0;

    return average;
  }

  handleDailyTransactionValue(transactions) {
    const grouped = _(transactions)
      .groupBy('createdDate')
      .map((objs, key) => ({
        createdDate: key,
        price: _.sumBy(objs, 'price'),
      }))
      .value();

    const priceByDateArr = Object.values(_.mapValues(grouped));

    let sum = _.sumBy(priceByDateArr, 'price');

    const average = sum / priceByDateArr.length || 0;

    return average;
  }

  handleTotalTransactionVolume(transactions) {
    return transactions.length;
  }

  handleTotalTransactionValue(transactions) {
    return _.sumBy(transactions, 'price');
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
              figure={this.numberWithCommas(
                this.handleDailyTransactionVolume(PAYMENTS)
              )}
            />
            <TransactionCard
              title="Daily Transaction Value"
              figure={`₦${this.numberWithCommas(
                this.handleDailyTransactionValue(PAYMENTS)
              )}`}
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
              figure={this.numberWithCommas(
                this.handleTotalTransactionVolume(PAYMENTS)
              )}
            />
            <TransactionCard
              title="Total Transaction Value"
              figure={`₦${this.numberWithCommas(
                this.handleTotalTransactionValue(PAYMENTS)
              )}`}
            />
          </div>
        </div>
        <div className="overview-graph-flex">
          <Graph />
          <div className="overview-graph-orders">
            <Orders
              pendingOrders={this.handleOrders('Pending')}
              reconciledOrders={this.handleOrders('Reconciled')}
            />
            <Payments
              unReconciledPayments={this.handlePayments('Un-reconciled')}
              reconciledPayments={this.handlePayments('Reconciled')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
