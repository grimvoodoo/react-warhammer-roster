import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseCalendar from "./ExpenseDate";
export default function ExpenseItem(props: any) {
    return (
        <div className="expense-item">
            <ExpenseCalendar date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">£{props.amount}</div>
            </div>
        </div>
    );
}
