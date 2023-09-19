import express from 'express';
import dotenv from 'dotenv';
import Router from './routes/todoRoutes.js';
import connectDB from './config/db.js';
import cors from 'cors';
import { errorHandler, notFound } from './middlerwares/errorHandler.js';
dotenv.config();

const port = process.env.PORT || 8000;
connectDB();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', Router);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`app is working at port ${port}`);
});
