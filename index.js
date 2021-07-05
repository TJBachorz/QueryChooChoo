import { createRequire } from 'module';

import { root } from './api-routes/router.js';
import { schema } from './schema/schema.js';

const require = createRequire(import.meta.url);

const app = require('express')();
const { graphqlHTTP } = require('express-graphql')
const compression = require('compression');

app.use(compression());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');