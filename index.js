const express = require('express');
const app = express();
const config = require('./config');
const apiRouter = require('./routes/api');


//routes
app.use('/', apiRouter );


app.listen(config.port, function() {
    console.log('serwer słucha...htttp:.3000..' + config.port)
});