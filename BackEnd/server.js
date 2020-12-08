const express = require('express')
const app = express()
const port = 4000 // changed as react uses 3000
//const cors = require('cors'); // cors need installing and will allow script to request data off server - NOT NEEDED ANYMORE
const bodyParser = require("body-parser") // // body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.bod
const mongoose = require('mongoose'); // getting-started.js mongoose
const path = require('path') // provides utilities for working with file and directory paths

// cors - one application so becomes reduntant - two domains not needed
//app.use(cors());
//app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//    res.header("Access-Control-Allow-Headers",
//        "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//});

// build and static folder configurations
app.use(express.static(path.join(__dirname, '../build'))); // config - where to find files (current diretory => build folder)
app.use('/static', express.static(path.join(__dirname, 'build/static'))); // (current diretory => static folder)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// connect to MongoDB database
const strMongoDB = 'mongodb+srv://admin:admin@cluster0.eozna.mongodb.net/mymovies?retryWrites=true&w=majority'; //connect to cluster MongoDB
mongoose.connect(strMongoDB, { useNewUrlParser: true }); // connect to database

const Schema = mongoose.Schema; // schema

const movieSchema = new Schema({  // type of schema
    Title: String,
    Year: String,
    
    Poster: String
}) // what doscuments in database will look like

const movieModel = mongoose.model("movie", movieSchema); // data model schemanode

app.get('/api/movies', (req, res) => { // GET method

    movieModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/movies/:id', (req, res) => {
    console.log(req.params.id); // log id to console

    movieModel.findById(req.params.id, (err, data) => {  // take id and search database
        res.json(data); // send data back
    })
})

app.put('/api/movies/:id', (req, res) => {
    console.log("Update: " + req.body);

    movieModel.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        res.send(data);
    })
})

app.delete('/api/movies/:id', (req, res) => {
    console.log(req.params.id); // log id

    movieModel.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (err)
            res.send(err);
        res.send(data);
    })
})

app.post('/api/movies', (req, res) => { // POST method
    console.log(req.body);

    movieModel.create({ // create new record in database
        Title: req.body.title,
        Year: req.body.year,
        Poster: req.body.poster
    })
    .then(() => {
        res.send('item created')
    })
    .catch();
})

app.get('*', (req, res) => { // '*' all other routes
    res.sendFile(path.join(__dirname + '/../build/index.html')); // send file back (directory => build/index.html)
})

app.listen(port, () => { // app listen at port 4000. used to bind and listen the connections on the specified host and port
    console.log(`Example app listening at http://localhost:${port}`)
})