import { Hero } from "./hero";

export interface Team{
    id: number;
    nom: string;
    membres: Hero[];
}