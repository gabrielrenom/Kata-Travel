interface ICity {
    id: number;
    name: string;
    isVisited: boolean;
    text: string;
    completed: boolean;
    country: string;
    attractions: IAttractions;
}
