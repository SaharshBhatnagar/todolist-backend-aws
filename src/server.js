import express from 'express';
import 'dotenv/config';
import chalk from 'chalk';
import router from '../src/routes/taskRoutes.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.use('/api/tasks', router);

app.listen(PORT, () => {
    console.log(chalk.green(`Server is Listening on port ${PORT}...`));
});

