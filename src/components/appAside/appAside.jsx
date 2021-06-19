import React, { Component } from 'react';
import MyLink from '../common/myLink/myLink';
import './style.css';

class AppAside extends Component {
  state = {};
  render() {
    return (
      <div className="aside">
        <h2>Aside</h2>
        <div className="linksBlock">
          <MyLink active icon="home" to="/">
            Home
          </MyLink>
          <MyLink icon="bell" to="/reminders">
            Reminders
          </MyLink>
          <MyLink icon="plane" to="/">
            Archive
          </MyLink>
          <MyLink icon="trash" to="/">
            Trash
          </MyLink>
          <MyLink icon="paw" to="/">
            Paw
          </MyLink>
        </div>
      </div>
    );
  }
}

export default AppAside;
