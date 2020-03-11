import React from 'react';
import './App.css';
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import {
  BrowserRouter as Router, 
  Route,
  Link,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className = "App" >
      <Router>
        <Link to="/">page1</Link>|
        <Link to="/page2">page2</Link>
        <Switch>
          <Route exact path="/" component={Page1}/>
          <Route path="/page2" component={Page2}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;