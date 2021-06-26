import RandomDie from '../models/RandomDie.js';

export const root = {
    hello: () => {
        return 'Hello world!';
    },
    getDie: ({numSides}) => {
        return new RandomDie(numSides || 6);
    },
    quoteOfTheDay: () => {
        return Math.random() > 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => Math.random(),
    rollDice: ({ numDice, numSides}) => {
        let output = [];
        for (let i=0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * ( numSides || 6)));
        }
        return output;
    }
};