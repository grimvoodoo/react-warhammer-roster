import { ExpenseTotal } from "./components/expenses/ExpenseTotal";
import { NewExpense } from "./components/newExpense/NewExpense";
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
            <NewExpense />
            <ExpenseTotal expenses={expenses} />
        </div>
    );
}

export default App;
