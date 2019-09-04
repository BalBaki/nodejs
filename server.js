const http = require('http');
const express = require('express');
var { User, Food } = require('./db');
var id = require('short-id');

var bodyParser = require('body-parser')
var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


const port = 3000;
app.listen(port, () => {
    console.log("Server Work at " + port + ". port")
})


app.get('/user/:username', function (request, response) {

    User.findOne({
        where: { firstName: request.params.username }
    }).then((user) => {
        if (user)
            response.send(user)
        response.send("User not found")
    })
})

app.get('/users', function (request, response) {
    User.findAll().then((users) => {
        if (users.length > 0)
            response.json(users)
        else
            response.json("Table is empty")
    })
})

app.post('/createAccount', function (request, response) {

    User.findOrCreate({
        where: { firstName: request.body.firstName },
        defaults: {
            id: id.generate(),
            firstName: request.body.firstName,
            lastName: request.body.lastName
        }
    }).then(result => {
        response.json(result)
    }).catch(err => {
        response.json(err)
    })

    app.delete('/user/:username', function (request, response) {

        User.destroy({
            where: { firstName: request.params.username },
        }).then(result => {
            response.json(result);
        }).catch(err => {
            response.json(err);
        })
    })

})

app.put('/user/:username', function (request, response) {
    if (request.params.username == request.body.firstName) {
        User.update({
            lastName: request.body.lastName
        },
            {
                where: { firstName: request.params.username }
            }).then(result => {
                response.json("success changed")
            }).catch(err => {
                response.json(err)
            })
    }
    else {
        User.update({
            firstName: request.body.firstName,
            lastName: request.body.lastName
        },
            {
                where: { firstName: request.params.username }
            }).then(result => {
                response.json("success changed")
            }).catch(err => {
                response.json(err)
            })
    }

})


app.get('/name', function (request, response) {
    response.json(request.query.firstName)
})



app.get('/bilalabi', function (request, response) {
    response.json("Telsiz Kapatan Bordobereli urgot")
})


//denemeler querystring
app.get('/quser', function (request, response) {

    var keys = Object.keys(request.query)
    var values = request.query;
    keys.forEach(element => {
        console.log(element)
    }); 
    
    User.update({
        lastName: request.body.lastName
    },
        {
            where: { firstName: request.params.username }
        }).then(result => {
            response.json("success changed")
        }).catch(err => {
            response.json(err)
        })

})