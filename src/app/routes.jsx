import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import UndefinedPage from '../pages/error/404/index.jsx';
import HomePage from '../pages/home/index.jsx';
import CameraDemo from '../pages/cameraDemo/index.jsx';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers.js';

const todos = combineReducers(reducers.getReducers());
let store = createStore(todos, applyMiddleware(thunk));

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/cameraDemo' exact component={CameraDemo}/>
          <Route path='/404' exact component={UndefinedPage}/>
          <Redirect path='/' to="/404"/>
        </Switch>
      </Router>)
  }
}

export default <Provider store={store}><App /></Provider>;