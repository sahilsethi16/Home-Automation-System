const express= require('express');
const path= require('path');
require('./db/mongoose');
const deviceRouter= require('./routers/device');
const hbs= require('hbs');

const app= express();
const port= process.env.PORT || 3000;

app.use(express.json());
app.use(deviceRouter);

const pubDirPath= path.join(__dirname,'../public');
const viewsPath= path.join(__dirname,'../templates/views');
const partialsPath= path.join(__dirname,'../templates/partials');

// Handlebars configuration
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(pubDirPath));


app.listen(port, () =>{
    console.log('Server is running on '+ port);
})