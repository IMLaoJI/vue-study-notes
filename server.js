/**
 * Created by zhuxp on 2017/4/12.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listen(8080);
app.get('/getUser',function(req,res){
    res.send([{name:'zfpx',ag:8}])
})
app.post('/postUser',function(req,res){
    console.log(req.body)
    res.send(req.body);
})
app.get('/',function (req,res) {
    res.sendFile('./get.html',{root:__dirname})
});