const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
// InitializationsW
const app = express();
// Settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname + '/views'));
app.engine(
  '.hbs',
  exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
//global variables

//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
//Static File
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
