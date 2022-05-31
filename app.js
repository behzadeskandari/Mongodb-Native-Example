const assert = require('assert');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'BehzadDb';

async function main() {
  // Use connect method to connect to the server
  
  await client.connect();
  
  console.log('Connected successfully to server');
  
  const db = client.db(dbName);
  
  const collection = db.collection('fruits');

 var insertResult = collection.insertMany([
      {
          name: "Apple",
          score: 8,
          review: "Great fruit",
      },
      {
        name: "Orange",
        score: 6,
        review: "Kida sour",
      },
      {
        name: "Banana",
        score:9,
        review: "Great stuff",
      }
  ],function(err,result){
    // assert.equal(3);
    console.log(result,'result');
    console.log(err,'message');
  })
  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  console.log(insertResult,'insertResult')
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());