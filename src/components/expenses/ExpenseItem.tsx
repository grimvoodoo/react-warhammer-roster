import { ExpenseDate } from "./ExpenseDate";
import React, { useState } from "react";

export const ExpenseItem = (props: any) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
};
