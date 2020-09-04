import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/header.component';
import Landing from './components/Landing/landing.component';
import Blog from './components/Blog/blog.component';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/blog' component={Blog} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
