import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: `e1`,
            title: `silicon sculptures`,
            amount: 21.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: `e2`,
            title: `yiff`,
            amount: 69.69,
            date: new Date(2020, 2, 21),
        },
        {
            id: `e3`,
            title: `Fox`,
            amount: 999.99,
            date: new Date(2020, 4, 20),
        },
        {
            id: `e4`,
            title: `rookden`,
            amount: 21.32,
            date: new Date(2022, 10, 12),
        },
    ];
    return (
        <div>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </div>
    );
}

export default App;
