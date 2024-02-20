import React, { useContext } from 'react';
import { GlobalContext } from '../content/GlobalState';
import {Transaction} from "./Transaction";
import {AddIncome} from "./AddIncome";


export const IncomeList = () => {
    const { transactions } = useContext(GlobalContext);

    console.log(transactions);

    return (
        <>
            <h3>History</h3><br/>
            <ul className="list">

                {transactions.map(transaction => (

                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
}
