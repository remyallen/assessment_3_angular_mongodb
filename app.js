var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/angular_assessment');
mongoose.model(
    'Hero_Entry',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
        },
        {
            collection: 'Heroes'
        }
    ));

var Hero_Entry = mongoose.model('Hero_Entry');

mongoose.model(
    'power_name',
    new Schema({
            "invisibility": String,
            "flight": String,
            "super_speed": String,
            "heat_vision": String,
            "super_strength": String,
            "accelerated_healing": String,
            "power_blast": String,
            "animal_affinity": String
        },
        {
            collection: 'SuperPowers'
        }
    ));

var power_name = mongoose.model('power_name');

app.get('/powers/:power_name', function(req, res) {
    console.log('here');
    power_name.find({"power_name": req.params.power_name}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
        console.log(data);
    });
});


app.post('/entry', function(req, res) {
    var addEntry = new Hero_Entry({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "primary_power": req.body.primary_power

    });

    addEntry.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Hero_Entry.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });

    app.get('/hero', function(req, res) {
        console.log('here');
        power_name.find({"power_name": req.params.power_name}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
            console.log(data);
        });
    });



});






// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});