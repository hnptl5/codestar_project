var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    Output: 'Hello This is my first project to codestar'
  });
});

app.post('/', function(req, res) {
  res.send({
    Output: 'Hello this is my first project to corestar'
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
