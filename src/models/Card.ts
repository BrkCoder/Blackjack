import {Suit} from "./Suit";
import {Rank} from "./Rank";

export interface Card {
    suit: Suit
    rank: Rank
    img: string
}