const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios")

app.use(express.static("public"))

app.get("/getAffirmation", function(req, res){
    axios["get"]("https://www.affirmations.dev").then(response=>res.json(response.data.affirmation));
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.listen(3000, function(){
    console.log("Listening on 3000")
})