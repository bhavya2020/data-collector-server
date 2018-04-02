const express = require('express'),
    path=require('path')
    ,app= express();
const bodyParser = require('body-parser');
const fs=require('fs');
const models=require('./models/mongo');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
let imgName=1;
app.post("/click",(req,res)=>{
    //console.log(req.body.img);

    let bitmap = new Buffer(req.body.img, 'base64');
    fs.writeFileSync("images/"+imgName+".jpg", bitmap);
    imgName++;
    res.send("got");
});
app.post("/sensor",(req,res)=>{

    //console.log(req.body);
    models.sensor.create(req.body);
    res.send("got");
});
app.listen(4444,()=>
    console.log('http://localhost:4444/'));