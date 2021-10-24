import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Video from './Video';
import Home from './Home';



ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <Switch>
        <Route exact path="/v/:id" component={Video} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
