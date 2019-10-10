import React from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './login';
import Home from './home';
import { Provider } from 'react-redux'
import store from '../store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;