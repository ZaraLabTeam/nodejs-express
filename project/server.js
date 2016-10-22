/**
 * Created by kidroca on 22.10.2016 г..
 */

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var Joke = require('./models/joke');

mongoose.connect('mongodb://localhost:27017/jokes-api');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure our app to handle CORS requests
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-22 Authorization');
    next();
});

// log requests
app.use(morgan('dev'));

var port = 2509;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var apiRouter = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
apiRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// Jokes routes
apiRouter.route('/jokes')
         .post(function (req, res) {
            var joke = new Joke();
             joke.content = req.body.content;
             joke.category = req.body.category;

             joke.save(function (err) {
                 if (err) {
                     return res.json({success: false, message: 'Нещо не стана'})
                 }
                 else {
                     return res.json({success: true})
                 }
             })
         })
         .get(function (req, res) {
            Joke.find(function (err, jokes) {

                if (err) res.send(err);

                res.json(jokes);
            })
         });

apiRouter.route('/jokes/random/:count')
         .get(function (req, res) {
             Joke.find(function (err, jokes) {

                 if (err) res.send(err);

                 res.json(jokes);
             })
         });

apiRouter.route('/categories')
         .get(function (req, res) {

             var query = Joke.distinct('category', function (err, categories) {
                 if (err) res.send(err);

                 categories = categories.map(function (category) {
                     return {name: category};
                 });

                 res.json(categories);
             });
         });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);