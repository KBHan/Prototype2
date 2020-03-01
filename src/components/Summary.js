import React from 'react';
import '../styles/Summary.css';


function Summary() {
    const summary_data = {
        budget: 1000000,
        amount: 600000,
        balance: 400000
    }
    
  return (
      <summary>
          <div>
              <table className="summary-table">
                  <tr>
                      <td>
                        <ul>
                            <li>Enrollment: </li>
                            <li>Budget: </li>
                            <li>Expense: </li>
                            <li>Balance: </li>
                        </ul>
                      </td>
                      <td>
                          <ul className="data-list">
                              <li >300</li>
                              <li >$ { summary_data.budget }</li>
                              <li >$ { summary_data.amount }</li>
                              <li >$ { summary_data.balance }</li>
                          </ul>
                      </td>
                  </tr>
              </table>
          </div>
          <br/><br/><br/><br/>
      </summary>
  );
}

export default Summary;
