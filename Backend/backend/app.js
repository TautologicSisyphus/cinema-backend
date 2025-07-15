var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var auth = require('./authenticate');
var passport = require('passport');
require('./config/passport')(passport);
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var ingressosRouter = require('./routes/ingressos');
var sessoesRouter = require('./routes/sessoes');

var app = express();

app.use('/authenticate', auth);
app.use(passport.initialize());

const mongoose = require('mongoose'); 
const url = 'mongodb://localhost:27017/cinema_db'
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
}, (err) => {
  console.error("Erro ao conectar ao MongoDB: ", err);
});

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/ingressos', ingressosRouter);
app.use('/sessoes', sessoesRouter);

module.exports = app;

