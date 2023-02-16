import "./UnitList";
import UnitList from "./UnitList";

export const BatchUnit = (props: any) => {
    return (
        <UnitList
            name={props.name}
            stat={props.stat}
            cost={props.cost}
            number={props.number}
        />
    );
};
