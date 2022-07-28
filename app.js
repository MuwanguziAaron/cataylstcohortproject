const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const passport = require('passport');
const Purchase = require('./models/Purchase');
const Reg = require('./models/Reg');


// mongoose settings
let config = require("./config/database");
require("dotenv").config();


//this just call for the routes ie in the routes folder,look for regroutes
const farm = require('./routes/loginroutes');
const regroutes = require('./routes/regroutes');
const aaron = require('./routes/cataylstroutes');
const characterroutes = require('./routes/characterroutes');
const descriptionroutes = require('./routes/descriptionroutes');
const purchaseroutes = require('./routes/purchaseroutes');

// instatiating express servers
const app = express();

mongoose.connect(config.database, {useNewurlParser: true});
const db = mongoose.connection;
// checking connections
db.once("open", function() {
    console.log("connected to mongodb")
});

db.on("error", function (error) {
    console.log(error);
});

// setting express sessions
const expressSession = require('express-Session')({
    secret: "secret",
    resave: false,
    saveUnitiallized: false,
});

// setting view engine
app.set("view engine", "pug");
app.set("views", "./views");

// express middle middle
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

//these call the pug files to get the routes
app.use('/login', farm);
app.use('/reg', regroutes);
app.use('/cataylst', aaron);
app.use('/character', characterroutes);
app.use('/description', descriptionroutes);
app.use('/purchase', purchaseroutes);



app.listen(3001,()=>{
    console.log('server listens on port 3001')
})
