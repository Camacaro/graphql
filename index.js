'use strict';

// esta sentencia lo que hace es buscar el archivo .env
// y carga las variables como entorno de desarrollo
require('dotenv').config();

const { makeExecutableSchema } = require('graphql-tools');
// const { buildSchema } = require('graphql');
const express = require('express');
const cors = require('cors');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path')
// configurar los resolvers
const resolvers = require('./lib/resolvers')

const app = express();
const port = process.env.port || 3000; 
const isDev = process.env.NODE_ENV !== 'production';

// definimos un schema 
// Integer, boolean, String, floaHola Mundot
// const schema = buildSchema( 
//     readFileSync( 
//         join(__dirname, 'lib', 'schema.graphql'),
//         'utf-8'
//     ) 
// );

const typeDefs = readFileSync( 
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
);

const schema = makeExecutableSchema({typeDefs, resolvers});

app.use( cors() );

app.use('/api', gqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: isDev
}));

app.listen(port, () => {
    console.log( `Server is listining at http://localhost:${port}/api` );
})