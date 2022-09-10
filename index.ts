import express from 'express'; // In typeScript we do not use this format --> const express = require('express') <-- but the one shown in line 1
const app = express();

//Endpoints

import home from './routes/home';
app.use('/', home);


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`App listening on PORT ${port}`));