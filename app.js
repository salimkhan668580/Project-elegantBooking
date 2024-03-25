
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


app.get("/salim",(req,res)=>{
  res.send("shivam laptop");
})

app.get("/nav",(req,res)=>{
  res.render("nav");
});
app.get("/register",(req,res)=>{
  res.render("register",  {nav: false});
})
app.get("/",(req,res)=>{
  res.render("index",  {nav: false});
})
app.get("/home",(req,res)=>{
  res.render("home",{nav: true});
})
module.exports = app;