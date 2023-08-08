import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './App/components/About'; // Your main application component
import home from './App/components/home'; // Example component for a route

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
