const express= require('express');
require('./db/mongoose');
const deviceRouter= require('./routers/device');


const app= express();
const port= process.env.PORT || 3000;

app.use(express.json());
app.use(deviceRouter);

app.listen(port, () =>{
    console.log('Server is running on '+ port);
})