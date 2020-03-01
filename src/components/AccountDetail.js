import React from 'react';
import '../styles/AccountDetail.css';

function AccountDetail() {
  return (
    <accountdetail >
      <div className="title">Account Detail Tables</div>
      <br/><br/>
      <ul className="buttons">
        <li className="buttons">
          <button className="ytd">SAL</button>
        </li>
        <li className="buttons">
          <button className="mtd">NON-SAL</button>
        </li>
        <li className="buttons">
          <button className="cf">FTE</button>
        </li>
        <li className="buttons">
          <button className="cf">CMNT</button>
        </li>
      </ul>
    </accountdetail>
  );
}

export default AccountDetail;