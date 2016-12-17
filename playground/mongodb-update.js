const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server \n');
  
  // db.collection('todos').findOneAndUpdate({
  //   _id: new ObjectID('58553fb244ab5498e888536e')
  // }, {
  //   $set: {
  //     completed: true // https://docs.mongodb.com/master/reference/operator/update/
  //   }
  // }, {
  //   returnOriginal: false // http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5855281750e4d49740a79a72')
  }, {
    $set: {
      name: 'Dima' // https://docs.mongodb.com/master/reference/operator/update/
    },
    $inc: {
      age: +1
    }
  }, {
    returnOriginal: false // http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
  }).then((result) => {
    console.log(result);
  });
  
  db.close();
});