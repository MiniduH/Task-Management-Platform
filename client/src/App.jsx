import { useState } from 'react'
import './App.css'
import Task from './getTask/task.jsx'
import AddTask from './addTask/addTask.jsx'
import UpdateTask from './updateTask/updateTask.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element : <Task />,
      },
      {
        path:"/add",
        element : <AddTask />,
        },
        {
          path:"/update/:id",
          element : <UpdateTask />,
          },

  ]);

  return (
    <>
      <div className='app'>
        <RouterProvider router={router} ></RouterProvider>
      </div>
    </>
  )
}

export default App
