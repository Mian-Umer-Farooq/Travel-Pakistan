import React, { Component } from 'react';

import Button from './Footer.css';
import reactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';



class Footer extends Component {
  render() {
    return (
     
      <div id="footer" >
          <img src={require('./images/facebook.png')} />
          <span>Facebook | </span>
          <img src={require('./images/twitter.png')} />
          <span>Twitter | </span>
          <img src={require('./images/instagram.png')} />
          <span>LinkdIn | </span>
          <img src={require('./images/linkdin.png')} />
          <span>Instagram | </span>
      <div id="footer1" >
        <img src={require('./images/around-pak.png')} /> 
      </div>
      <div id="footer2" >
        © Copyright 2019, All Rights Reserved.
      </div>
      </div>
    );
  }
}

export default Footer;

