import express from 'express';
import {
  addTodo,
  deleteTodo,
  getOneTodo,
  getTodos,
  updateTodo,
} from '../controllers/todoController.js';
const router = express.Router();

router.get('/api/todos', getTodos);
router.post('/api/todos', addTodo);
router.get('/api/todos/:id', getOneTodo);
router.put('/api/todos/:id', updateTodo);
router.delete('/api/todos/:id', deleteTodo);
export default router;
