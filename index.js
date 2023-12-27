const express = require ('express');
const {connect} = require('./connect');
const { Router } = require('./routes');
const app = express();

connect();

app.use(express.json());
app.use(express.urlencoded({extended: 'true'}));
app.use('/', Router);

app.listen(4000, async () => {
    console.log(`Successfully started the server on PORT: 4000`);
});