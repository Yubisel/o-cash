const express = require('express');
const logger = require('morgan');
const path = require('path');


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(logger('dev'));
app.use(express.json());

//Routes
app.use('/categories', require('./routes/Categories'));

//Statics
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => console.log('Server listening on port', app.get('port')));