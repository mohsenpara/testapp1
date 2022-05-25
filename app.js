var mongoPassword = 'Potato900';
			
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  var config = JSON.parse(process.env.APP_CONFIG);
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect(
    "mongodb://" + config.mongo.user + ":" + encodeURIComponent(mongoPassword) + "@" + 
    config.mongo.hostString, 
    function(err, db) {
      if(!err) {
        res.end("We are connected to MongoDB");
      } else {
        res.end("Error while connecting to MongoDB");
      }
    }
  );
});
server.listen(process.env.PORT);