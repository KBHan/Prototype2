import React from 'react';
import '../styles/Summary.css';

function Summary() {
  return (
      <summary>
          <div>
              <table>
                  <tr>
                      <td>
                        <ul>
                            <li>Enorllment: </li>
                            <li>Budget: </li>
                            <li>Expense: </li>
                            <li>Balance: </li>
                        </ul>
                      </td>
                      <td>
                          <ul className="data-list">
                              <li className="data-list">300</li>
                              <li className="data-list">$ 1,000,000</li>
                              <li className="data-list"> $ 600,000</li>
                              <li className="data-list">$ 400,000</li>
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
