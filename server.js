var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(express.static(__dirname + "/public"));

app.post("/hello",upload.single('userFile'), function(req,res,next){
    res.end(JSON.stringify({ 'size': req.file.size + " bytes" }, null, 4));
});
app.listen(3000, function(){
    console.log("connection made");
});
