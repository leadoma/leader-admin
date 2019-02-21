import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SiderDemo from './containers/SiderDemo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/SiderDemo'),
  loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </Router>

    );
  }
}

export default App;
