import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import Summary from './components/Summary';
import FinancialData from './components/FinancialData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Title} />
          <Route path="/Summary" component={Summary} />
          <Route path="/FinancialData" component={FinancialData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
