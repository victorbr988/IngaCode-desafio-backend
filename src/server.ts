import cors from 'cors';
import express from 'express';
import 'dotenv/config'
import { tasksRouter } from './routers/tasks';
import { projectsRoute } from './routers/projects';
import { userRouter } from './routers/users';
import { authUser, validateUser } from './Middleware/authUser';
import { colaboratorRoute } from './routers/colaborator';
import { timeTrackerRouter } from './routers/timeTrackers';
import { validateTimeTracker } from './Middleware/middlewareTimeTracker';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tasks', authUser, tasksRouter);
app.use('/project', authUser, projectsRoute);
app.use('/user', validateUser, userRouter);
app.use('/colaborator', authUser, colaboratorRoute);
app.use('/timeTracker', authUser, validateTimeTracker, timeTrackerRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));