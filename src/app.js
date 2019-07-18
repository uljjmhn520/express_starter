import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {sprintf} from 'sprintf-js';
import Ioc from 'electrolyte';

import indexRouter from './routes/index';
import usersRouter from './routes/users';


let app = express();


let initApp = async function () {

  let config = await Ioc.create('config');

  let loggerJs = await Ioc.create('logger');
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  //一般情况下，前面有一层nginx ，这个可能用不着，后设为在dev下用
  app.use(logger('dev'));

  app.use(async function (req,res,next) {

    let a = sprintf('%s %s',req.method,req.url);
    loggerJs.debug(a);
    await next();

  });
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);


  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //logger.error(err.message);
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
};


module.exports = initApp;

