 require('dotenv').config

 const express = require('express')
 const app = express()

 app.get('/',(req,res)=>{
    res.send('Hello world')
 })

 app.listen(4000, ()=>{
    console.log("Backend en ejecucion en el puerto", process.env.PORT)
 })