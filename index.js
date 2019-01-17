var express = require("express");
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var collegeRouter = require('./routes/collegeRouter');
var studentRouter = require('./routes/studentRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/colleges', collegeRouter);
app.use('/api/students', studentRouter);


mongoose.connect("mongodb://deepmala:deepmala123@ds259154.mlab.com:59154/student",{useNewUrlParser: true })
.then(function(){
  console.log("database connected");
})
.catch(function(err){
  console.log("could not connect to database")});

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server running on port : " + PORT);
});
