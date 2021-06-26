const app = require('express')();
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql');
const compression = require('compression');
app.use(compression());

const schema = buildSchema(`
    type Query {
        hello: String
        rollDice(numDice: Int!, numSides: Int): [Int]
    }
`);

const root = {
    hello: () => {
        return 'Hello world!';
    },
    rollDice: ({ numDice, numSides}) => {
        let output = [];
        for (let i=0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * ( numSides || 6)));
        }
        return output;
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');