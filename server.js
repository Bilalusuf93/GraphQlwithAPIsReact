var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const schema = require('./schema')
const app = express();
// app.get('/', (req, res) =>{
//     res.send('Hello World');
// });
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
})
);
app.listen(5000, () => console.log('Server is  running'));