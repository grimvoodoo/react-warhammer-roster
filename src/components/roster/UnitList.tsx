export default function UnitList(props: any) {
    return (
        <div className="expense-item">
            <div>
                <div>
                    <h1>
                        <div>{props.name}</div>
                    </h1>
                </div>
            </div>
            <div className="expense-item__description">
                <div>
                    <h2>M</h2>
                    <h2>{props.stat[0]}</h2>
                </div>
                <div>
                    <h2>WS</h2>
                    <h2>{props.stat[1]}+</h2>
                </div>
                <div>
                    <h2>BS</h2>
                    <h2>{props.stat[2]}+</h2>
                </div>
                <div>
                    <h2>S</h2>
                    <h2>{props.stat[3]}</h2>
                </div>
                <div>
                    <h2>T</h2>
                    <h2>{props.stat[4]}</h2>
                </div>
                <div>
                    <h2>W</h2>
                    <h2>{props.stat[5]}</h2>
                </div>
                <div>
                    <h2>A</h2>
                    <h2>{props.stat[6]}</h2>
                </div>
                <div>
                    <h2>LD</h2>
                    <h2>{props.stat[7]}</h2>
                </div>
                <div>
                    <h2>SV</h2>
                    <h2>{props.stat[8]}+</h2>
                </div>
                <div className="expense-item__price">{props.cost}</div>
            </div>
        </div>
    );
}
