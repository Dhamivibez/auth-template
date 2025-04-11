import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { configDB } from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import router from './routes/routes.js';

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', router);

configDB();

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server Running');
});
