import { useState } from "react";
const ManageData = () =>
{
    let someData=10;

    const [number, setNumber] = useState(15);
    return(
        <>
        <div>
            Valor someData {someData}
            <button onClick={()=>setNumber(24)}>Mudar Variável</button>
        </div>
        <p>{number}</p>
        </>
    );
};

export default ManageData;