const express=require('express');
const mysql=require('mysql2');
const cors=require('cors');

const app=express();
const port=3000;

app.use(cors());

const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'8952',
    // database:'mydatabase.weather',
    database:'mydatabase',
    port:3306
})

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        throw err;
    }
        console.log('Connected to database');
    }
);

app.get('/api/weather', (req,res)=>{
    db.query("SELECT * FROM weather", (err,data)=>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving data from database');
            return;
        }
        res.json(data);
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})