const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'mydb';

const client = new MongoClient(url);

client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);

  const collection = db.collection('mycollection');

  collection.insertOne({ name: 'Zukisa', age: 30 }, function(err, result) {
    if (err) {
      console.error('Failed to insert document:', err);
    } else {
      console.log('Document inserted successfully');
    }

    client.close();
  });
});
