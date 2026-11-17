const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
const crud = require('./crud');
app.use(crud);

const server = app.listen(5000, () => {
    console.log('Server is running on ' + server.address().port);
});