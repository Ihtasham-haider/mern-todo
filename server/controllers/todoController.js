import asyncHandler from 'express-async-handler';
import Todo from '../models/todoModel.js';
export const getTodos = asyncHandler(async (req, res) => {
  const resp = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(resp);
});
export const getOneTodo = asyncHandler(async (req, res) => {
  const resp = await Todo.findById(req.params.id);
  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id },
    { done: !resp.done }
  );
  await todo.save();
  res.status(200).json(todo);
});
export const addTodo = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const resp = await Todo.create({
    text,
  });

  res.status(200).json(resp);
});
export const updateTodo = asyncHandler(async (req, res) => {
  console.log(req.body);
  await Todo.findOneAndUpdate({ _id: req.params.id }, { text: req.body.text });
  const todo = await Todo.findById(req.params.id);
  res.status(200).json(todo);
});
export const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findOneAndDelete(req.params.id);

  res.status(200).json(todo);
});
