const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/home', (req, res)=>{
    res.status(200);
    res.send("Welcome to home URL of Server");
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server Created')
})