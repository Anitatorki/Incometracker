import React, { useState, useContext } from "react";
import { GlobalContext } from '../content/GlobalState';
import {IncomeList} from "./IncomeList";


export const AddIncome = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [date] = useState(null);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        let newD = new Date();
        newD = new Date(newD.getFullYear(), newD.getMonth(), newD.getDate());

    const NewTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        date: newD.getTime(),

        amount: +amount


    };
    setText('');
    setAmount(0);

    addTransaction(NewTransaction);

};
    //I have a error here as inclome list is not show the history

    return (
        <>


            <form className="income-form" onSubmit={onSubmit}>
                <div className="form-inner">
                    <h4>Add New Transaction</h4>

                    <br/>

                    <label htmlFor="text">Name Transaction</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name of Income..." />
                </div>
                    <div className="form-inner">
                        <label htmlFor="amount"
                        >Amount<br />(negative - expense, positive - income)</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." />
                    </div>

                    <div  className="form-inner">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" placeholder="Income date..." ref={date} />
                    </div>

                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

