import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';




class Header extends Component {
  render() {
    return (
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div id="img1" >
        <img src={require('./images/around-pak1.png')} />
      </div>
      </div>
    );
  }
}

export default Header;

