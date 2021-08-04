import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './pages/SignIn';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/signin' component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
