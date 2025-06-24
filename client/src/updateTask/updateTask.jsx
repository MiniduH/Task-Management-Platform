import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './updateTask.css'
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const updateTask = () => {
    const task = {
        task:"",
    };
    const [tasks, setTask] = React.useState(task);
    const navigate = useNavigate();
    const { id } = useParams();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setTask({ ...task/** use to copy the current value of task*/, [name]: value });
        console.log(name, value);
    }
    useEffect(() => {
        axios
          .get(`http://localhost:8000/task/getById/${id}`)
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

  return (
    <div className='updateTask'> 
        <Link to='/' type="button" className="btn btn-primary">Back</Link>
        <h3>Update Task</h3>
        <form className='taskForm'>
            <div>
                <label htmlFor="taskInput">Task</label>
                <input type="text" className="form-control" placeholder="Enter task" id='taskInput' onChange={inputHandler}/>
            </div>
            <button type="submit" className="btn btn-success">Update</button>
        </form>
    </div>
  )
}

export default updateTask