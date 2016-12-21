const { ObjectID } = require('mongodb');
const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/Todo');

const id = '58557b1c8c1ecd9f46f505c1';

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '123'})
// Todo.findByIdAndRemove('123')