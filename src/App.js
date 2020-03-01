import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import Summary from './components/Summary';
import FinancialData from './components/FinancialData';
import AccountDetail from './components/AccountDetail';
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
          <Route path="/AccountDetail" component={AccountDetail} />
        </Switch>
        <div className="footer">CREATED BY: KYUBOK_HAN@DPSK12.ORG</div>
      </div>
    </Router>
  );
}

export default App;
