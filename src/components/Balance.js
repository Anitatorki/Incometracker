import React, {useContext} from 'react';
import '../App.css';
import { GlobalContext } from '../content/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);


    return (
        <header className="headerstyle">
            <h4> Balance</h4>
            <div className="total-income">
                <h5 id="balance">${total}</h5><br/>
            </div>
            <div >
                <div>
                    <h5>Income</h5>
                    <p >{income}</p><br/>
                </div>
                <div>
                    <h5>Expense</h5>
                    <p >{expense}</p><br/>
                </div>
            </div>
        </header>
    )
}

export default Balance;

