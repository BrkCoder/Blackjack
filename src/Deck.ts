import {Types} from "./models/Types";
import {Card} from "./models/Card";
import {Compositions} from "./Compositions";


export class Deck implements Deck {
    public cards: Card[] = [];
    amount = 0;

    constructor(public type = Types.English) {
        this.create(this.type);
        this.shuffle(this.cards);
    }

    /**
     * Create Cards Deck.
     * A. Deal the cards.
     * B. Shuffle the cards.
     * @param type
     */
    public create(type: string) {
        this.cards = this.deal(type);
        this.amount = Compositions[type].amount;

    }

    /**
     * Deal the Cards.
     * @param type
     * @private
     */
    private deal(type: string): Card[] {
        const cards: Card[] = [];
        const {suits, ranks} = Compositions[type];
        suits.forEach(suit => {
            ranks.forEach(rank => {
               cards.push({
                   rank,
                   suit,
                   img: ''
               })
            });
        });
        return cards;
    }

    /**
     * Shuffle the Cards.
     * @param cards
     * @private
     */
    private shuffle(cards: Card[]){
        return cards.sort(() => {
            return Math.random() > 0.5 ? 1 : -1;
        })
    }
}