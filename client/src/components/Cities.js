import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './cities.css';
import Lahore from './Lahore';

class Cities extends Component {
  render() {
    return (

      <div class="container">
        <h1>Welcome to Pakistan</h1>
        <h3>Pakistan is the difficult child of South Asia – blessed with abundant <br />
          natural and historical riches, but plagued by political instability, <br />
          which has kept the country off the radar for all but the most<br />
          hardened explorers.
        </h3>
        <img id="image" src={require('./images/Minar-e-Pakistan.png')} />
        <div class="bottom-left"> <Link to="/lahore">Lahore </Link> </div>
        <img id="image" src={require('./images/Islamabad.jpg')} />
        <div class="bottom-left1">Islamabad</div>
        <img id="image" src={require('./images/Kashmir.jpg')} />
        <div class="bottom-left2">Kashmir</div>
        <img id="image" src={require('./images/gilgit.jpg')} />
        <div class="bottom-left3">gilgit</div>
        <img id="image" src={require('./images/karachi.jpg')} />
        <div class="bottom-left4">Murree</div>
        <img id="image" src={require('./images/Murree.jpg')} />
        <div class="bottom-left5">karachi</div>
        <img id="image" src={require('./images/Skardu.jpg')} />
        <div class="bottom-left6">Skardu</div>
        <img id="image" src={require('./images/Hunza.jpg')} />
        <div class="bottom-left7">Hunza</div>
      </div>
        );
      }
    }
    
    export default Cities;
    
