import { ArmyUnit } from "./ArmyUnit";
import { useState } from "react";

export const ArmyList = (props) => {
    return (
        <div>
            {props.list.map((expense: any) => (
                <ArmyUnit
                    title={expense.title}
                    amount={expense.amount}
                    weapons={expense.weapons}
                />
            ))}
        </div>
    );
};
