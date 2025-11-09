import type {  CatFactProp } from "../Types/models";

const FactsComponent = ({facts}: CatFactProp) => {

    return(
        <div style={{color:"blue", background:"green"}}>
            {facts.map((fact, index) => (
                <div>
                    <h2>Номер факта:{index}</h2>
                    <h3>{fact.fact}</h3>
                    <p>длинна : {fact.length}</p>
                </div>
            ))}
        </div>
    )
}

export default FactsComponent;