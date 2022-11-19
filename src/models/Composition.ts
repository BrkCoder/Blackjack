import {Suit} from "./Suit";
import {Rank} from "./Rank";

export interface Composition {
    amount: number
    suits: Suit[],
    ranks: Rank[]
}