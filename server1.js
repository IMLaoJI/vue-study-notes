/**
 * Created by zhuxp on 2017/4/12.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leave');
var leaveSchema = new mongoose.Schema({
    title:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
mongoose.model('Leave',leaveSchema);
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(8080);
app.post('/leaves',function(req,res){
    var data = req.body;
    console.log(data);
});
app.get('/',function (req,res) {
    res.sendFile('./15leave.html',{root:__dirname})
});