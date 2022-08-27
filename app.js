const express = require('express');
const app = express();
const routerApi = require('./routes/routes');
const path = require('path');
const port = 3001;

app.use(express.static(path.join('public')));
app.set('view engine', 'ejs');
routerApi(app);







const server  = app.listen(port, ()=>{
    console.log(`Conected!! on port ${port}`)
})