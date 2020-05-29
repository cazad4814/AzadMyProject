var object=require('./topEconomic.json');
var express=require('express');
var app=express();
app.use(express.static('public'));

app.get('/topEconomic',(req,res)=>
{
    
    const season=req.query.year;
    const result=object.topEconomicalBowlers[season];

    res.send(result);
})

var server = app.listen(2020, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Listening on port %d', server.address().port);
 })
 