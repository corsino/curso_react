import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("joaos");
  return (
    <div>
        <div>Isso será exibido</div>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>agora x é falso</p>}
        {name==="joao" ? (<p> o nome é joão</p>) : (<p>nome não encontrado</p>)}
        <button onClick={() => setName("joao")}>troque o nome</button>
    </div>  
)
}

export default ConditionalRender