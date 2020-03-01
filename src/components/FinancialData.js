import React from 'react';
import '../styles/FinancialData.css';

function FinancialData() {
  return (
    <financialdata >
      <div className="title">Financial Data Tables</div>
      <br/><br/>
      <ul className="buttons">
        <li className="buttons">
          <button className="ytd">YTD</button>
        </li>
        <li className="buttons">
          <button className="mtd">MTD</button>
        </li>
        <li className="buttons">
          <button className="cf">CF</button>
        </li>
      </ul>
    </financialdata>
  );
}

export default FinancialData;