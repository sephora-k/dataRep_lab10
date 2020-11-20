const express = require('express');
const app = express();
const port = 4000;                  //different port no. for current app
const cors = require('cors');      //includes CORS Library
const bodyParser = require("body-parser"); //parsing incoming request
const mongoose = require('mongoose');   //Mongoose library

//-------------------------------------------

app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:sephora7@cluster0.blkcs.mongodb.net/movies?retryWrites=true&w=majority'; //DB URL
mongoose.connect(myConnectionString, {useNewUrlParser: true}); //server connects to MongoDB using URL

const Schema = mongoose.Schema;

var movieSchema = new Schema({
    Title:String,                            //may be uppercase or lowercase
    Year:String,
    Poster:String

});  //define schema

//interact with DB (using MovieModel)
var MovieModel = mongoose.model("movie", movieSchema)    //collection & schema


app.get('/api/movies', (req, res) => {      //Root Point
    
    // const myMovies = [
    //     {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "imdbID":"tt4154756",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "imdbID":"tt3498820",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"World War Z",
    //         "Year":"2013",
    //         "imdbID":"tt0816711",
    //         "Type":"movie",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
            
    // ];

    MovieModel.find((err, data)=>{  //finds all docs in DB
        res.json(data);
    }) 

//     res.json({      //Sending object & msg string with Status Code
//         message: "Everything is OK!",
//         movies:myMovies});
 })

 app.get('/api/movies/:id', (req, res)=>{
        console.log(req.params.id);

        MovieModel.findById(req.params.id, (err, data)=> {  //interact with DB
            res.json(data); //send it back to server
        }) 
 })

app.post('/api/movies', (req, res) => {     //Post request sends data to server (front end)
    console.log('Movie Received!');     //server going to receive this data
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);

    MovieModel.create({     //saves docs to DB
        Title: req.body.Title,
        Year: req.body.Year,
        Poster: req.body.Poster
    })
    res.send('Item added!') //alert msg 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})