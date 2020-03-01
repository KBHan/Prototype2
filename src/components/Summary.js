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
          <div className="title">Summary</div>
          <div className="tables">
            <table className="table1">
                 <tr>
                    <td>
                        <div className="border-up">ENROLLMENT</div>
                    </td>
                    <td>
                        <div className="border-up">BUDGET</div>
                    </td>
                    <td>
                        <div className="border-up">ACT AMOUT</div>
                    </td>
                    <td>
                        <div className="border-up">BALANCE</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="border-div">300</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.budget }</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.amount }</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.balance }</div>
                    </td>
                </tr>
            </table>
            <br/><br/>
            <table className="table2">
                 <tr>
                    <td>
                        <div className="border-up">ENROLLMENT</div>
                    </td>
                    <td>
                        <div className="border-up">BUDGET</div>
                    </td>
                    <td>
                        <div className="border-up">ACT AMOUT</div>
                    </td>
                    <td>
                        <div className="border-up">BALANCE</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="border-div">300</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.budget }</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.amount }</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.balance }</div>
                    </td>
                </tr>
            </table>
            <br/><br/>
            <table className="table3">
                 <tr>
                    <td>
                        <div className="border-up">ENROLLMENT</div>
                    </td>
                    <td>
                        <div className="border-up">BUDGET</div>
                    </td>
                    <td>
                        <div className="border-up">ACT AMOUT</div>
                    </td>
                    <td>
                        <div className="border-up">BALANCE</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="border-div">300</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.budget }</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.amount }</div>
                    </td>
                    <td>
                        <div className="border-div">$ { summary_data.balance }</div>
                    </td>
                </tr>
            </table>
        </div>
      </summary>
  );
}

export default Summary;
