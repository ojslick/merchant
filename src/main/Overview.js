import React from 'react';
import _ from 'lodash';

import TransactionCard from './components/TransactionCard';

import './Overview.css';
import Graph from './components/Graph';
import Orders from './components/Orders';
import Payments from './components/Payments';
import SelectInput from './components/SelectInput';

import DownArrow from './Images/DownArrow.svg';
import Search from './Images/Search.svg';

import PAYMENTS from '../data/dummy-data-payments';
import ORDERS from '../data/dummy-data-payments';

class Overview extends React.Component {
  state = {
    filteredPayment: [],
    options: [
      { value: 'all', label: 'All' },
      {
        value: 'reconciled',
        label: 'Reconciled',
      },
      { value: 'unReconciled', label: 'Un-Reconciled' },
      { value: 'settle', label: 'Settled' },
      { value: 'unsettled', label: 'Unsettled' },
    ],
  };

  componentDidMount() {
    this.setState({ filteredPayment: PAYMENTS });
  }

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

  handleFilter(value) {
    const searchResult = this.state.filteredPayment[0]
      ? this.state.filteredPayment.filter((payment) => {
          return payment.productName
            .toLowerCase()
            .includes(value.toLowerCase());
        })
      : PAYMENTS.filter((payment) => {
          return payment.productName
            .toLowerCase()
            .includes(value.toLowerCase());
        });

    this.setState({ filteredPayment: searchResult });
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
        <div className="overview-payment-list">
          <h1 className="overview-payment-list-header">Payments</h1>
          <div className="overview-payment-list-actions">
            <div className="overview-payment-list-actions-showing">
              Showing
              <span
                style={{
                  color: '#1875F0',
                  cursor: 'pointer',
                  display: 'flex',
                  marginRight: '5px',
                  marginLeft: '10px',
                }}
              >
                9
              </span>
              <img
                src={DownArrow}
                alt="Down-Arrow"
                style={{ marginRight: '5px', cursor: 'pointer' }}
              />
              of 9 payments
            </div>
            <div
              className="top-navigation-left-search"
              style={{
                borderBottom: '1px solid #787878',
                paddingBottom: '4px',
              }}
            >
              <img
                src={Search}
                alt="Search"
                className="top-navigation-left-search-icon"
              />
              <input
                placeholder="Search"
                className="top-navigation-left-search-input"
                style={{ background: 'none' }}
                onChange={(e) => this.handleFilter(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <p className="overview-payment-list-show">Show</p>
              <SelectInput
                options={this.state.options}
                // onChange={() => this.handleFilter('reconciled', 'reconciled')}
              />
            </div>
          </div>
          <div className="overview-payment-list-container">
            <div
              style={{ width: '7%' }}
              className="overview-payment-list-title"
            >
              Item Type
            </div>
            <div
              style={{ width: '30%' }}
              className="overview-payment-list-title"
            ></div>
            <div
              style={{ width: '15%' }}
              className="overview-payment-list-title"
            >
              Price
            </div>
            <div
              style={{ width: '15%' }}
              className="overview-payment-list-title"
            >
              Transaction No
            </div>
            <div
              style={{ width: '13%' }}
              className="overview-payment-list-title"
            >
              Time
            </div>
            <div
              style={{ width: '20%' }}
              className="overview-payment-list-title"
            ></div>
          </div>
          {this.state.filteredPayment[0]
            ? this.state.filteredPayment.map((payment) => (
                <div
                  className="overview-payment-list-container-payment"
                  key={payment.id}
                >
                  <div
                    style={{ width: '7%' }}
                    className="overview-payment-list-title"
                  >
                    {payment.itemType}
                  </div>
                  <div
                    style={{ width: '30%' }}
                    className="overview-payment-list-title"
                  >
                    {payment.productName}
                  </div>
                  <div
                    style={{ width: '15%' }}
                    className="overview-payment-list-title"
                  >
                    {payment.price}
                  </div>
                  <div
                    style={{ width: '15%' }}
                    className="overview-payment-list-title"
                  >
                    {payment.transactionNo}
                  </div>
                  <div
                    style={{ width: '13%' }}
                    className="overview-payment-list-title"
                  >
                    {payment.time}
                  </div>
                  <div
                    style={{ width: '20%' }}
                    className="overview-payment-list-title"
                  >
                    {payment.status}
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    );
  }
}

export default Overview;
