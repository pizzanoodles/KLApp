const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const routes = require("./models/routes/api");
const app = express();
const PORT = process.env.PORT || 8080;


//calmlyDemented
const MONGODB_URI='mongodb+srv://jensjovellano:calmlyDemented@knowledgereview.frvnxmg.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.');
});
app.use(express.json());
app.use(express.urlencoded(({ extended: false})));

// HTTP Request logger

app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));