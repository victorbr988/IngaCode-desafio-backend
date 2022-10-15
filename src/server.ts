import express from "express";
const cors = require('cors');
import 'dotenv/config'
import { tasksRouter } from "./routers/tasks";
import { projectsRoute } from "./routers/projects";
import { userRouter } from "./routers/users";
import { authUser, validateUser } from "./Middleware/authUser";
const app = express()

const port = process.env.PORT
app.use(express.json());
app.use(cors())

app.use('/tasks', authUser, tasksRouter)
app.use('/project', authUser, projectsRoute)
app.use('/user', validateUser, userRouter)

app.listen(port, () => console.log(`listening on port ${port}`))