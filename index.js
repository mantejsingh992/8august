var express = require('express');
var app = express()

app.get('/',function(req,res){
res.send('HELL WORLD')
})

app.listen(3000)