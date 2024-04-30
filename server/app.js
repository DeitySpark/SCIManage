const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connection = require('./service/db.config');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());  // 用于解析json数据格式的中间件
app.use(express.urlencoded({ extended: false })); // 用于解析urlencoded请求体的中间件
app.use(cookieParser());  // 用于解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public')));  // 用于托管静态文件的中间件

app.use("/", express.static(path.join(__dirname, "/dist/index.html")));

 // 路由和接口
// app.use('/', indexRouter);
// app.use('/users', require('./routes/users'))
app.use('/admin', require('./routes/admin'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//传递静态文件夹dist。需要使用path
const http = require('http')
const server = http.createServer(app)
server.listen(5500, () => {
  console.log('success listen at port:5500')})

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //项目上线后改成页面的地址
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,token");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');

    next();
} );


module.exports = app;
