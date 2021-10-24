import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Video from './Video';
import Home from './Home';
import LatestUpload from './LatestUpload';

ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <Switch>
        <Route exact path="/latest" component={LatestUpload} />
      </Switch>


      <Switch>
        <Route exact path="/v/:id" component={Video} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
