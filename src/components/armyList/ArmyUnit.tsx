import { ArmyWeapons } from "./ArmyWeapons";
export const ArmyUnit = (props: any) => {
    const clickHandler = () => {
        console.log(props);
    };

    return (
        <button
            className="mx-auto relative container mx-auto bg-slate-700 text-slate-200 p-6 rounded-3xl m-3 overflow-hidden"
            onClick={clickHandler}
        >
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="">{props.title}</h2>
                    <div className="">
                        {props.weapons.map((weapon: any) => (
                            <ArmyWeapons weapons={weapon} />
                        ))}
                    </div>
                    <div className="">Points: {props.amount}</div>
                </div>
            </div>
        </button>
    );
};
