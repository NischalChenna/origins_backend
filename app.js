const express = require('express');
const bodyParser = require('body-parser');
const dbConn = require('./config/db_config');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/farmers', (req, res) => {
    dbConn.query('SELECT * FROM farmer_details',function(err,rows)     {
 
        if(err) {
            req.flash('error', err);
            // render to views/books/index.ejs
            res.json({ error: err })
        } else {
            // render to views/books/index.ejs
            res.json({data:rows});
        }
    });
});
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});