const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const Todo = require('./../../models/Todo');
const User = require('./../../models/User');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [
  {
    "_id" : userOneId,
    "email" : "andrew@example1.com",
    "password" : "userOnePass",
    "tokens" : [ 
        {
          "access" : "auth",
          "token" : jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
        }
    ]
  },
  {
    "_id" : userTwoId,
    "email" : "andrew@example2.com",
    "password" : "userTwoPass",
    "tokens" : [ 
        {
          "access" : "auth",
          "token" : jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
        }
    ]
  }
];

const todos = [
  {
    _id: new ObjectID,
    "text": "First tests todo",
    _creator: userOneId
  },
  {
    _id: new ObjectID,
    "text": "Second tests todo",
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {
  todos,
  users,
  populateTodos,
  populateUsers
};