'use strict';

const express = require('express');
const dinosaur = require('./dinosaur/dinosaur');
const cors = require('cors');

const app = express(); // singleton

app.use(cors());


// what parameters are defined in express functions ??
app.get('/capitalize-me', function (request, response, next) {
  // I want to send a message as a query parameter??
  if (request.query.message) {
    // I want that message returned in the response as all caps.
    let upperMessage = dinosaur(request.query.message);
    response.send(upperMessage);
  } else {
    response.send('Please attach a message');
  }
});

module.exports = app;