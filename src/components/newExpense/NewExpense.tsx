import Card from "../ui/Card";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = () => {
    return (
        <Card>
            <div className="new-expense">
                <ExpenseForm />
            </div>
        </Card>
    );
};
