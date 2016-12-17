const { ObjectID } = require('mongodb');
const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/Todo');

const id = '58557b1c8c1ecd9f46f505c1';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos find \n', todos, '\n');
// });

// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   if (!todos) return console.log('Id not found');

//   console.log('Todos findOne \n', todos, '\n');
// });

Todo.findById(id).then((todos) => {
  if (!todos) return console.log('Id not found');

  console.log('Todos findById \n', todos, '\n');
}).catch((err) => console.log(err));