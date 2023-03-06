import { ExpenseTotal } from "./components/expenses/ExpenseTotal";
import { NewExpense } from "./components/newExpense/NewExpense";
import { useState } from "react";
import { ArmyList } from "./components/armyList/ArmyList";

interface unit {
    id: String;
    title: String;
    amount: Number;
    weapons: Array<string>;
}

const KNIGHTS_LIST = [
    {
        id: `e1`,
        title: `Armiger Helverin`,
        amount: 160,
        weapons: [`armiger autocannon`, `meltagun`],
    },
    {
        id: `e2`,
        title: `Armiger Warglave`,
        amount: 150,
        weapons: [`meltagun`, `thermal spear`, `reaper chain cleaver`],
    },
    {
        id: `e3`,
        title: `Knight Errant`,
        amount: 430,
        weapons: [
            `meltagun`,
            `thermal cannon`,
            `reaper chainsword`,
            `titanic feet`,
        ],
    },
    {
        id: `e4`,
        title: `Knight Warden`,
        amount: 440,
        weapons: [
            `avenger gattling cannon`,
            `heavy flamer`,
            `meltagun`,
            `reaper chainsword`,
            `titanic feet`,
        ],
    },
    {
        id: `e5`,
        title: `Knight Crusader`,
        amount: 1,
        weapons: [
            `avenger gattling cannon`,
            `heavy flamer`,
            `meltagun`,
            `thermal cannon`,
            `titanic feet`,
        ],
    },
    {
        id: `e6`,
        title: `Knight Gallant`,
        amount: 1,
        weapons: [
            `meltagun`,
            `reaper chainsword`,
            `thunderstrike gauntlet`,
            `titanic feet`,
        ],
    },
    {
        id: `e7`,
        title: `Knight Paladin`,
        amount: 1,
        weapons: [
            `rapid-fire battle cannon`,
            `meltagun`,
            `reaper chainsword`,
            `titanic feet`,
        ],
    },
    {
        id: `e8`,
        title: `Knight Castellan`,
        amount: 1,
        weapons: [
            `plasma decimator`,
            `4x shield breaker missiles`,
            `2x twin meltagun`,
            `twin siegebreaker cannon`,
            `volcano lance`,
            `reaper chainsword`,
            `titanic feet`,
        ],
    },
    {
        id: `e9`,
        title: `Knight Valiant`,
        amount: 1,
        weapons: [
            `Conflagoration cannon`,
            `4x shieldbreaker missiles`,
            `thundercoil harpoon`,
            `2x twin meltagun`,
            `twin siegebreaker cannon`,
            `titanic feet`,
        ],
    },
    {
        id: `e10`,
        title: `Knight Preceptor`,
        amount: 1,
        weapons: [
            `las-impulsor`,
            `perceptor multi-laser`,
            `reaper chainsword`,
            `titanic feet`,
        ],
    },
    {
        id: `e11`,
        title: `Canis Rex`,
        amount: 1,
        weapons: [
            `las-impulsor`,
            `perceptor multi-laser`,
            `freedom's hand`,
            `titanic feet`,
        ],
    },
];

function App() {
    const [expenses, setExpenses] = useState(KNIGHTS_LIST);

    const addExpenseHandler = (expense: expense) => {
        console.log("In App.js");
        console.log(expense);
        setExpenses((prevExpenses: any) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div className=" bg-slate-900 overflow-hidden">
            {/* <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseTotal expenses={expenses} /> */}
            <ArmyList list={KNIGHTS_LIST} />
        </div>
    );
}

export default App;
