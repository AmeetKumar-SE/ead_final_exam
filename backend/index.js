const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const cors = require('cors')
app.use(cors())
//app.use()


app.use(express.urlencoded())
//app.use(express.json());

const mongooseObject = require('mongoose');

mongooseObject.connect('mongodb://localhost:27017/ead').then(function(){
    console.log('connected to database');
}).catch(function(err){
    console.log(JSON.stringify(errr));
})

const mongoReicpe = require('./models/receipe');

app.post('/recipe/save', async (req, res) => {
    const receipe = await mongoReicpe.create(req.body);
    if(!receipe){
        console.log(" Not Created")
    }
    console.log("Created")
    res.end();

})

app.get('/recipes', async (req, res) => {
      const receipes = await mongoReicpe.find()
      res.send(receipes);
}) 

app.get('/', (req, res) => {
    res.render('home');
})

app.listen('3005', (req, res) => {
    console.log('Server listening on 3005')
});
