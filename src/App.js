import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { AddIncome } from "./components/AddIncome";
import { Balance } from './components/Balance';
import { GlobalProvider } from "./content/GlobalState";
import { IncomeList } from "./components/IncomeList";

function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    };

    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");
    const [showIncomeForm, setShowIncomeForm] = useState(false);
    const [income, setIncome] = useState([]);

    const Login = (details) => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Details do not match!");
            setError("Details do not match!");
        }
    };

    const Logout = () => {
        setUser({ name: "", email: "" });
    };

    const toggleIncomeForm = () => {
        setShowIncomeForm(!showIncomeForm);
    };

    return (
        <GlobalProvider>
            <div className="LoginApp">
                {user.email !== "" ? (
                    <div className="welcome">
                        <h2>Welcome, <span>{user.name}</span></h2>
                        <button onClick={Logout}>Logout</button>
                        <button onClick={toggleIncomeForm}>Input your income</button>
                        <Balance />
                    </div>
                ) : (
                    <LoginForm Login={Login} error={error} />
                )}
                {showIncomeForm ? (
                    <AddIncome income={income} setIncome={setIncome} />
                ) : null}
            </div>
        </GlobalProvider>
    );
}

export default App;
