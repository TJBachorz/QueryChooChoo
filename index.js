import { createRequire } from 'module';

import { root } from './api-routes/routes.js';

const require = createRequire(import.meta.url);

const app = require('express')();
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql');
const compression = require('compression');
app.use(compression());

const schema = buildSchema(`
    type Mutation {
        setMessage(message: String): String
    }

    type Query {
        hello: String
        getDie(numSides: Int): RandomDie
        quoteOfTheDay: String
        random: Float!
    }

    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }
`);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');