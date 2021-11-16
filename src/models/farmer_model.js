var express = require('express');
var router = express.Router();
var dbConn = require('./../../config/db.config');
 
// display books page
router.get('/farmers', function(req, res, next) {
      
    dbConn.query('SELECT * FROM farmer_details',function(err,rows)     {
 
        if(err) {
            req.flash('error', err);
            // render to views/books/index.ejs
            res.render('books',{data:''});   
        } else {
            // render to views/books/index.ejs
            res.render('books',{data:rows});
        }
    });
});