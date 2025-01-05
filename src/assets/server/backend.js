const express = require("express");
let app = express();
mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const port = 3000;
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "railway",
    connectionLimit: 10,
});
app.post('/api/signup',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const TEL = req.body.TEL
    const query = `INSERT INTO customers (SSN,Customer_Name,Email,password,phoneNumber) VALUES ("${100}","${username}","${email}","${password}","${TEL}")`
    pool.query(query,(err,results)=>{
        if(err){
            console.error("Error",err.stack);
            res.status(500).send("Error inserting data")
            return
        }
        console.log('Data inserted:',results)
        res.send('Data inserted Successfully')
    });
});
app.listen(3000,'localhost', () => {
    console.log(`Server is running on port ${port}`);
});
module.exports = {app,pool};
