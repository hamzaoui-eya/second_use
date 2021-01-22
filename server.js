const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
//app.use(express.static(__dirname + '/dist/paper-kit-2-angular'));
app.use(express.static('./dist/<npaper-kit-2-angular>'));
// Send all requests to index.html
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/<paper-kit-2-angular'));
// });
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/<paper-kit-2-angular>/'}
  );
  });

// default Heroku PORT
app.listen(process.env.PORT || 8080);