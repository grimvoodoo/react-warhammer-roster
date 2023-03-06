import { ExpenseItem } from "./ExpenseItem";
import Card from "../ui/Card";
import { useState } from "react";
export const ExpenseTotal = (props) => {
    return (
        <Card>
            {props.expenses.map((expense: any) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};
