const express = require('express');
const app = express();
const port = 4000;

let result;

var conn = require('./database');

app.get('/:id', (req, res) => {

  let sql = `SELECT A.id, A.First_Name, A.Last_Name, A.Phone_num, A.Email, B.Type, B.Tot_Amount FROM user_database.user_table as A, (SELECT Type, sum(Amount) As Tot_Amount FROM user_database.transaction_table WHERE user_id = ${req.params.id} GROUP BY Type) as B WHERE id = ${req.params.id};`

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
