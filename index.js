var express = require('express');
var app = express()
app.get('/',function(req,res){
    res.send('<h1>HELLo WORLD</h1>')
    })

app.post('/',function(req,res){
res.send('HELL WORLD')
})
app.put('/',function(req,res){
    res.send('putttt WORLD')
    })
    app.delete('/',function(req,res){
        res.send('putttt WORLD')
        })

app.listen(3000)