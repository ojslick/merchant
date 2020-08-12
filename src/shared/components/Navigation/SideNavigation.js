import React from 'react';

import Overview from './images/Overview.svg';
import Wallet from './images/Wallet.svg';
import WalletChecked from './images/WalletChecked.svg';
import WalletCancelled from './images/WalletCancelled.svg';
import ManualSettlement from './images/ManualSettlement.svg';
import PendingOrders from './images/PendingOrders.svg';
import ReconciledOrders from './images/ReconciledOrders.svg';
import Order from './images/Order.svg';
import User from './images/User.svg';

import './SideNavigation.css';

const SideBar = () => {
  return (
    <div className="side-bar-navigation">
      <button className="side-bar-navigation-button">GENERATE INVOICE </button>
      <div className="side-bar-navigation-link">
        <p className="side-bar-navigation-header">Main</p>
      </div>
      <div className="side-bar-navigation-header-item">
        <div className="side-bar-navigation-header-item-border"></div>
        <div className="side-bar-navigation-header-item-content">
          <div className="side-bar-navigation-header-item-content-flex">
            <img
              src={Overview}
              alt="Overview"
              style={{ marginRight: '15px' }}
            />
            <p className="side-bar-navigation-header-item-content-flex-text">
              Overview
            </p>
          </div>
        </div>
      </div>
      <div className="side-bar-navigation-link">
        <p className="side-bar-navigation-header">Payment</p>
      </div>
      <div className="side-bar-navigation-header-item">
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img src={Wallet} alt="Overview" style={{ marginRight: '15px' }} />
          <p className="side-bar-navigation-header-item-content-flex-text">
            All Payments
          </p>
        </div>
      </div>
      <div className="side-bar-navigation-header-item" style={{ marginTop: 0 }}>
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img
            src={WalletChecked}
            alt="Overview"
            style={{ marginRight: '15px' }}
          />
          <p className="side-bar-navigation-header-item-content-flex-text">
            Reconciled Payments
          </p>
        </div>
      </div>
      <div className="side-bar-navigation-header-item" style={{ marginTop: 0 }}>
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img
            src={WalletCancelled}
            alt="Overview"
            style={{ marginRight: '15px' }}
          />
          <p className="side-bar-navigation-header-item-content-flex-text">
            Un - Reconciled Payments
          </p>
        </div>
      </div>
      <div className="side-bar-navigation-header-item" style={{ marginTop: 0 }}>
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img
            src={ManualSettlement}
            alt="Overview"
            style={{ marginRight: '15px' }}
          />
          <p className="side-bar-navigation-header-item-content-flex-text">
            Manual Settlement
          </p>
        </div>
      </div>
      <div className="side-bar-navigation-link">
        <p className="side-bar-navigation-header">Orders</p>
      </div>
      <div className="side-bar-navigation-header-item">
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img src={Order} alt="Overview" style={{ marginRight: '15px' }} />
          <p className="side-bar-navigation-header-item-content-flex-text">
            All Payments
          </p>
        </div>
      </div>
      <div className="side-bar-navigation-header-item" style={{ marginTop: 0 }}>
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img
            src={PendingOrders}
            alt="Overview"
            style={{ marginRight: '15px' }}
          />
          <p className="side-bar-navigation-header-item-content-flex-text">
            Pending Orders
          </p>
        </div>
      </div>
      <div className="side-bar-navigation-header-item" style={{ marginTop: 0 }}>
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img
            src={ReconciledOrders}
            alt="Overview"
            style={{ marginRight: '15px' }}
          />
          <p className="side-bar-navigation-header-item-content-flex-text">
            Pending Orders
          </p>
        </div>
      </div>
      <div
        className="side-bar-navigation-header-item"
        style={{ marginTop: '10px' }}
      >
        <div
          className="side-bar-navigation-header-item-content-flex"
          style={{ marginLeft: '31px' }}
        >
          <img src={User} alt="Overview" style={{ marginRight: '15px' }} />
          <p className="side-bar-navigation-header-item-content-flex-text">
            Pending Orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
