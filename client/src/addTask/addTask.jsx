import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './addTask.css';
import axios from 'axios';

const addTask = () => {
    const task = {
        task:"",
    };
    const [tasks, setTask] = React.useState(task);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setTask({ ...task/** use to copy the current value of task*/, [name]: value });
        console.log(name, value);
    }

const submitForm = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/task/create", tasks)
    .then((response) => {
        console.log("task added successfully:", response.data);
        setTask(task); // Reset the form
        navigate('/')
    })
        
    .catch ((error) =>{
        console.error("Error adding task:", error);
    })};

  return (
    <div className='addTask'>
        <Link to='/' type="button" className="btn btn-primary">Back</Link>
        <form className='taskForm' onSubmit={submitForm}>
            <div>
            <label htmlFor="task">Task</label>
            <input type="text" className="form-control" placeholder="Enter task" id='task' onChange={inputHandler} name='task' />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>

    </div>
  )
}

export default addTask