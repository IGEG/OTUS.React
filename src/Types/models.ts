export interface CatFact {
    fact:string;
    length:number;
}

export interface CatFactResponse {
    data: CatFact[];
}

export interface ErrorProps {
    message:string;
}

export interface CatFactProp {
    facts:CatFact[]
}
