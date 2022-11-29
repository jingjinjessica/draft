const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const createError = require('http-errors');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash =require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

//Router
const createpageRouter = require('./routes/CreatePage')
const dashboardRouter = require('./routes/Dashboard')
const detailpageRouter = require('./routes/DetailPage')
const editprofileRouter = require('./routes/EditProfile')
const editblogRouter = require('./routes/EditBlog')
const loginRouter = require('./routes/Login')
const logoutRouter = require('./routes/Logout')
const registerRouter = require('./routes/Register')

//app.use
app.use('/createpage', createpageRouter);
app.use('/dashboard',dashboardRouter);
app.use('/detailpage',detailpageRouter);
app.use('/editprofile',editprofileRouter);
app.use('/editblog',editblogRouter);
app.use('/login',loginRouter);
app.use('/logout',logoutRouter);
app.use('/register',registerRouter);

app.use(express.json());


module.exports = app;




app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})
