const express = require("express");
const axios = require('axios');
const request = require('request');

const app=express();

let result=[]

const getJoke=async ()=>{



var limit = 3
request.get({
  url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
  headers: {
    'X-Api-Key': '71koDh6OkmD8DWg/0qbqvg==fqbgczR0nDld07nC'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else {
    result=[]
    result.push(body)
}
});
}


app.get("/get-joke",(req,res)=>{
    
    getJoke()

    res.json({
        result
    })
})

app.listen(8080,()=>console.log("server is up and running on port 8080"));