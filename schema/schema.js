import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { buildSchema } = require('graphql');

export const schema = buildSchema(`
    type Mutation {
        setMessage(message: String): String
    }

    type Query {
        hello: String
        getDie(numSides: Int): RandomDie
        getMessage: String
        quoteOfTheDay: String
        random: Float!
    }

    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }
`);