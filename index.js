
const profRoutes = require('./routes/profRoutes');
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
const dbURI = `${process.env.MONGOURI}`;

const mongoose = require('mongoose');
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true}).then((result) => console.log('connected')).catch((err) => console.log(err));
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(profRoutes);

app.get('/', (req, res) =>{
    res.redirect('/profs');
})



app.listen(8080);