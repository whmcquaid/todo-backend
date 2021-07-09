const mongoose = require('mongoose'); // requiring mongoose package

const todoSchema = new mongoose.Schema({
  // creating a schema for each todo
  task: {
    // field1: task
    type: String, // task is a string
    unique: true, // is has to be unique
    required: true, // it is required
  },
  completed: {
    // field2: completed
    type: Boolean, // it is Boolean
    default: false, // the default is false
  },
});

const todoModel = mongoose.model('Todo', todoSchema) // creating a model from the Schema

module.exports = todoModel // exporting the model