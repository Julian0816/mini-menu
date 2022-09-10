import express from 'express'; // In typeScript we do not use this format --> const express = require('express') <-- but the one shown in line 1
const app = express();

//Endpoints

app.get('/', (req, res)=>{
    res.send('Hello from express and typescript');
})


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`App listening on PORT ${port}`));