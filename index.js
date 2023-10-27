const express = require('express');
const app = express();

//by default port number is 80
const port = 8000;
const expressLayouts = require('express-ejs-layouts'); 
app.use(express.static('./assests'))
app.use(expressLayouts);

//extract style and scripts into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//use express router
app.use('/', require('./routes'))
//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function(err){
    if(err){
        // console.log('Error: ', err);
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})