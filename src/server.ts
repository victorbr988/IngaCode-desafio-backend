import express from "express";
const cors = require('cors');
import 'dotenv/config'
import { tasksRouter } from "./routers/tasks";
import { projectsRoute } from "./routers/projects";
const app = express()

const port = process.env.PORT
app.use(express.json());
app.use(cors())

app.use('/tasks', tasksRouter)
app.use('/project', projectsRoute)

app.listen(port, () => console.log(`listening on port ${port}`))