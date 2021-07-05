import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { buildSchema } = require('graphql');

export const schema = buildSchema(`
    input MessageInput {
        content: String
        author: String
    }

    type Message {
        id: ID!
        content: String
        author: String
    }

    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(id: ID!, input: MessageInput): Message
    }

    type Query {
        hello: String
        getDie(numSides: Int): RandomDie
        getMessage(id: ID!): Message
        quoteOfTheDay: String
        random: Float!
    }

    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }
`);