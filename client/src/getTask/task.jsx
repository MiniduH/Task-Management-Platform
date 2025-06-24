import React from 'react'
import './task.css'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const task = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() =>{
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:8000/task/getAll");
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks()
    },[]);

    const deleteTask = async (taskId) => {
        await axios
          .delete(`http://localhost:8000/task/delete/${taskId}`)
          .then((response) => {
            setTasks((prevUser) => prevUser.filter((task) => task._id !== taskId));
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div className='task'>
        <Link to='/add' type="button" className="btn btn-primary">Add Task</Link>
        <table className='taskTable table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>Task</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((newtask) => {
                    return (
                        <tr>
                            <td>{newtask.task}</td>
                            <td className='editButtons'>
                                <Link to={'/update/'+newtask._id} type="button" className="btn btn-info">Update</Link>
                                < button onClick={() => deleteTask(newtask._id)} type="button" className="btn btn-danger">Delete </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default task