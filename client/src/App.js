import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Header from './components/Header';
import Content from './components/Content';
import Review from './components/Review';
import Footer from './components/Footer';
import Lahore from './components/Lahore';
import about from './components/about';
import { BrowserRouter, Switch, Route, withRouter  } from 'react-router-dom'

//import './App.css';

global.React = React;
global.reactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.__SERVER__ = true;

class App extends Component {
  render() {
    return(
    <BrowserRouter>
          <div className="App">
            <Header />

            <Switch>

             
              <Route path="/review" component={Review} />
              <Route path="/lahore" component={Lahore} />

              <Route exact path="/" component={Content} />
              
			  
              <Route path="/about" component={about} />

              


            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
        );
  }
}

export default App;
