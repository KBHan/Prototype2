import React from 'react';
import '../styles/FinancialData.css';

function FinancialData() {
  return (
    <financialdata >
      <table>
        <tr>
          <th>Expense Category</th>
          <th>July</th>
          <th>August</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
          <th>January</th>
          <th>February</th>
          <th>March</th>
          <th>April</th>
          <th>May</th>
          <th>June</th>
        </tr>
        <tr>
          <td>Full-Time Salary</td>
        </tr>
        <tr>
          <td>Part-Time Salary</td>
        </tr>
        <tr>
          <td>Substitute Salary</td>
        </tr>
        <tr>
          <td>Overtime</td>
        </tr>
        <tr>
          <td>Other Salary</td>
        </tr>
        <tr>
          <td>Benefit</td>
        </tr>
        <tr>
          <td>Benefit Credit</td>
        </tr>
        <tr>
          <td>Non-Salary</td>
        </tr>
      </table>
      <br/><br/><br/><br/>
    </financialdata>
  );
}

export default FinancialData;