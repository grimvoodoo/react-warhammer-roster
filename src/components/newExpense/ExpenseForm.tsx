import { useState } from "react";

export const ExpenseForm = (props) => {
    interface iState {
        title: String;
        amount: Number;
        date: Date;
    }

    const titleChangeHandler = (event) => {
        setUserInput((prevState: iState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    };
    const amountChangeHandler = (event) => {
        setUserInput((prevState: iState) => {
            return {
                ...prevState,
                amount: event.target.value,
            };
        });
    };
    const dateChangeHandler = (event) => {
        setUserInput((prevState: iState) => {
            return {
                ...prevState,
                date: event.target.value,
            };
        });
    };
    // const [myTitle, setMyTitle] = useState("");
    // const [myAmount, setMyAmount] = useState("");
    // const [myDate, setMyDate] = useState("");

    const [userInput, setUserInput]: any = useState({
        title: "",
        amount: "",
        date: "",
    });

    const submitHander = (event) => {
        event.preventDefault();
        // console.log(userInput);
        props.onSaveExpenseData(userInput);
        setUserInput({
            title: "",
            amount: "",
            date: "",
        });
    };

    return (
        <form onSubmit={submitHander}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={userInput.amount}
                        // min="0.01"
                        // step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={userInput.date}
                        // min="2019-01-01"
                        // max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
