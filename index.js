var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb+srv://Axewound:RegnumOnline@cluster0-ypnoz.gcp.mongodb.net/test?retryWrites=true&w=majority'

var dbName = 'Axewound';

MongoClient.connect(url, function(err, client) {
    //assert.equal(null, err);
    console.log("Connected successfully to server");
   
    var db = client.db(dbName);
   
    client.close();
  });