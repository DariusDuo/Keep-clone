import React, { Component } from 'react';
import linkS from './myLink.module.css';

class MyLink extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <i className={`fa fa-${this.props.icon}`}></i>;
  }
}

export default MyLink;
