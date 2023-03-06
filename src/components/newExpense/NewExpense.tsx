import Card from "../ui/Card";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <Card>
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
            </div>
        </Card>
    );
};
