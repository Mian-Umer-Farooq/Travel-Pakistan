import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Slideshow from './slide';
import Cities from './Cities';
import'./Content.css';


class Content extends Component {
  render() {
    return ( 
      <div>
        <Slideshow/>
        <Cities/>
      </div>
    );
  }
}

export default Content;

