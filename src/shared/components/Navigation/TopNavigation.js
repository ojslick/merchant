import React from 'react';

import Search from './images/Search.svg';
import Notification from './images/Notification.svg';
import UserPic from './images/UserPic.jpg';

import './TopNavigation.css';

const TopNavigation = () => {
  return (
    <nav className="top-navigation">
      <div className="top-navigation-left">
        <p className="top-navigation-left-logo">TransMonitor</p>
        <div className="top-navigation-left-search">
          <img
            src={Search}
            alt="Search"
            className="top-navigation-left-search-icon"
          />
          <input
            placeholder="Search"
            className="top-navigation-left-search-input"
          />
        </div>
      </div>
      <div className="top-navigation-right">
        <p className="top-navigation-right-support">Support</p>
        <p className="top-navigation-right-support">FAQ</p>
        <img
          src={Notification}
          alt="notification"
          style={{ cursor: 'pointer' }}
        />
        <div className="top-navigation-right-user">
          <div style={{ marginRight: '15px' }}>
            <p className="top-navigation-right-user-hello">Hello</p>
            <p className="top-navigation-right-user-name">Oluwaleke Ojo</p>
          </div>
          <img
            src={UserPic}
            alt="user"
            className="top-navigation-right-user-pic"
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
