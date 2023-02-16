import { useState } from "react";
import Card from "../ui/Card";
export const ExpenseForm = () => {
    const titleChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                myTitle: event.target.value,
            };
        });
    };
    const amountChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                myAmount: event.target.value,
            };
        });
    };
    const dateChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                myDate: event.target.value,
            };
        });
    };
    // const [myTitle, setMyTitle] = useState("");
    // const [myAmount, setMyAmount] = useState("");
    // const [myDate, setMyDate] = useState("");

    const [userInput, setUserInput] = useState({
        myTitle: "",
        myAmount: "",
        myDate: "",
    });

    const clickHandler = () => {
        console.log(userInput);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={clickHandler}>
                    Submit
                </button>
            </div>
        </form>
    );
};
