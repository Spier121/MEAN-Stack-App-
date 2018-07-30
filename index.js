var express = require ("express"),
    app     = express(),
    config  = require("./config/database"),
    path    = require("path"); 

  

const mongoose = require('mongoose');
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log(err);
	}else{
       
		console.log("connected to database " + config.db);
	}
});

app.use(express.static(__dirname + "/client/dist/client"))



    app.get('/',(req,res) =>{
       res.res.sendFile(path.jone(__dirname + "/client/dist/client/index.html")); 
    });











    app.listen(8080, () => { 
    	console.log("Server Has Started >>>>>>>");
    });