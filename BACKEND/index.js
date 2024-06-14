import express from 'express'
const app=express()
const port=3005

// app.get('/',(req,res)=>{
//     res.send("Hello Moron");
// })

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"A joke",
            content:"This is a Joke"
        },
        {
            id:2,
            title:"B joke",
            content:"This Is second Joke"
        }
    ];  
    res.json(jokes);
})

app.listen(port,()=>{
    console.log(`Running on port http://localhost:${port}/`);
})