import {Composition} from "./models/Composition";
import {Types} from "./models/Types";

export const Compositions: { [key: string]: Composition } = {
    [Types.English]: {
        amount: 52,
        suits: [

            {
                name: 'clubs',
                symbol: '♣'
            },
            {
                name: 'diamonds',
                symbol: '♦'
            },
            {
                name: 'hearts',
                symbol: '♥'
            },
            {
                name: 'spades',
                symbol: '♠'
            }
        ],
        ranks: [
            {
                name: 'Ace',
                symbol: 'A',
                value: [1, 11],
            },
            {
                name: 'two',
                symbol: '2',
                value: 2
            },
            {
                name: 'three',
                symbol: '3',
                value: 3
            },
            {
                name: 'four',
                symbol: '4',
                value: 4
            },
            {
                name: 'five',
                symbol: '5',
                value: 5
            },
            {
                name: 'six',
                symbol: '6',
                value: 6
            },
            {
                name: 'seven',
                symbol: '7',
                value: 7
            },
            {
                name: 'eight',
                symbol: '8',
                value: 8
            },
            {
                name: 'nine',
                symbol: '9',
                value: 9
            },
            {
                name: 'ten',
                symbol: '10',
                value: 10
            },
            {
                name: 'queen',
                symbol: 'Q',
                value: 10
            },
            {
                name: 'king',
                symbol: 'K',
                value: 10
            },
            {
                name: 'jack',
                symbol: 'J',
                value: 10
            }
        ]

    },
}