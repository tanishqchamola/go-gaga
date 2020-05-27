const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const app = express();

const db = require('./config/key.js').MongoURI;

mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Bodyparser
app.use(express.urlencoded({
    extended: false
}));

app.use('/gogaga', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}...`);
});