const { ObjectID } = require('mongodb');
const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const Todo = require('./models/Todo');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (err) => {
    res.status(400).send(err);
  });
});

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  if (!ObjectID.isValid(id)) {
    return res.status(400).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    
    res.send({ todo });
  }).catch((err) => {
    res.status(404).send()
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port} \n`);
});


module.exports = app;
