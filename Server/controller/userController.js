import Task from "../Model/userModel.js";

//Create new task
export const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get All tasks
export const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find();
        if(!task || task.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update task 
export const updateTask = async (req, res) => {
    try{
    const id = req.params.id;
    const taskExsist = await Task.findById(id);
        if(!taskExsist){
            return res.status(404).json({ message: "Task not found" });
        }
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { 
            new: true, });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete task
export const deleteTask = async (req, res) => {
    try{
        const id = req.params.id;
        const taskExsist = await Task.findById(id);
        if(!taskExsist){
            return res.status(404).json({ message: "Task not found" });
        }
        await Task.findByIdAndDelete(id); 
        res.status(200).json({ message: "Task deleted successfully" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}

export const getTaskById = async (req, res) => {
    try{
        const id = req.params.id;
        const taskExsist = await Task.findById(id);
        if(!taskExsist){
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(taskExsist);
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
}