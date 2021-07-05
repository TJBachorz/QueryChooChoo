import RandomDie from '../models/RandomDie.js';

export const diceRoutes = {
    getDie: ({ numSides }) => {
        return new RandomDie(numSides || 6);
    }
};