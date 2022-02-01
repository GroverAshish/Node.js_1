const express = require('express');
const app = express();
const port = 4000;

let result;

var conn = require('./database');

app.get('/:id', (req, res) => {

  let sql = `SELECT * FROM user_table WHERE id = ${req.params.id}`

  conn.query(sql, function(err,res){
    if(err)throw err;
    else
    result = res;
  }) 

  res.send(result);

})

app.listen(port, ()=>{
  console.log("App is listening on port 4000");
  conn.connect(function(error){
    if(error){
       throw error;
    }
    else{
       return console.log("Connection Established");
    }
})
})
