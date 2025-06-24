import express from "express";
import { createTask, getAllTasks, updateTask, deleteTask, getTaskById } from "../controller/userController.js";
import { get } from "mongoose";

const route = express.Router();

// Route to create a new task
route.post("/create", createTask);
route.get("/getAll", getAllTasks);
route.put("/update/:id", updateTask);
route.delete("/delete/:id", deleteTask);
route.get("/getById/:id", getTaskById);

export default route;