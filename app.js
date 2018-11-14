const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//Load keys
const keys = require('./config/keys');


//console.log(keys.mongoURI);


// Map global promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(keys.mongoURI, {
   useNewUrlParser: true,
 })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();

app.get('/', (req, res) => {
  res.send('Test');
});

//Use routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
