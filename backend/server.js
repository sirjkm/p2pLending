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

const getLoanRouter = require('./routes/getLoan');
const giveLoanRouter = require('./routes/giveLoan');
const usersRouter = require('./routes/users');

app.use('/getLoan', getLoanRouter);
app.use('/giveLoan', giveLoanRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
