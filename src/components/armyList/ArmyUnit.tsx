import { ArmyWeapons } from "./ArmyWeapons";
export const ArmyUnit = (props: any) => {
    const clickHandler = () => {
        console.log(props.id);
    };

    return (
        // <div className="p-6 max-w-sm mx-auto bg-slate-700 text-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="mx-auto relative container mx-auto bg-slate-700 text-slate-200 p-6 rounded-3xl m-3 flex justify-center overflow-hidden">
            <div className="  ">
                <h2>{props.title}</h2>
                <div>
                    {props.weapons.map((weapon: any) => (
                        <ArmyWeapons weapons={weapon} />
                    ))}
                </div>
                <div className="unit-cost">Points: {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Add</button>
        </div>
    );
};
