const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection successful");
})

const borrowRouter = require('./routes/borrow');
const lendRouter = require('./routes/lend');
const usersRouter = require('./routes/users');

app.use('/borrow', borrowRouter);
app.use('/lend', lendRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//reactProject - FE - run on 3000 (this calls stuff on backend:5000) - deployed to a CDN
//NodeJS/express - BE - run on 5000 



