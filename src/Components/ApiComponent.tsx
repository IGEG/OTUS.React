import { useState } from "react"
import type { CatFact, CatFactResponse } from "../Types/models"
import ErrorComponent from "./ErrorComponent";
import FactsComponent from "./FactsComponent";

const BaseURL: string = 'https://catfact.ninja/facts';

const ApiComponent = () => {
    const [facts, setFacts] = useState<CatFact[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            console.log("Начинается загрузка");
            const response = await fetch(BaseURL);
            console.log("После загрузки полусени ответ со статусом:", response.status);

            if (!response.ok)
                throw new Error(`Ошибка ${response.status}`);

            // десериализуем массив данных о котах
            const responseData: CatFactResponse = await response.json();

            if (responseData.data.length == 0)
                console.log(`Ошибка в данных. Данные пусты`);

            setFacts(responseData.data);
        }
        catch (error) {
            setError(`Произошла ошибка: ${error instanceof Error ? error.message : "неизвестная ошибка"}`);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <h1>
                Интересные факты о котах!
            </h1>
            <button onClick={fetchData} disabled={loading}>
                {loading ? "Идет загрузка" : "Загрузить данные"}
            </button>
            {facts.length > 0 && <FactsComponent facts={facts} />}
            {error && <ErrorComponent message={error} />}
        </div>
    )
}


export default ApiComponent