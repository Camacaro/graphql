'use strict';

const { buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path')
// configurar los resolvers
const resolvers = require('./lib/resolvers')

const app = express();
const port = process.env.port || 3000; 

// definimos un schema 
// Integer, boolean, String, floaHola Mundot
const schema = buildSchema( 
    readFileSync( 
        join(__dirname, 'lib', 'schema.graphql'),
        'utf-8'
    ) 
);

app.use('/api', gqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(port, () => {
    console.log( `Server is listining at http://localhost:${port}/api` );
})