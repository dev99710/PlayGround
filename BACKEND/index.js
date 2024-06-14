const express=require('express')
const app=express()
const port=3001

app.get('/',(req,res)=>{
    res.send("Hello Moron");
})

app.get('/twitter',(req,res)=>{
    res.send('devcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>LOGIN IN INSTAGRAM</h1>')
})

app.listen(port,()=>{
    console.log(`Running on port http://localhost:${port}/`);
})