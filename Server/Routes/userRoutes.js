import express from "express";
import { createTask, getAllTasks, updateTask, deleteTask } from "../controller/userController.js";

const route = express.Router();

// Route to create a new task
route.post("/create", createTask);
route.get("/getAll", getAllTasks);
route.put("/update/:id", updateTask);
route.delete("/delete/:id", deleteTask);

export default route;