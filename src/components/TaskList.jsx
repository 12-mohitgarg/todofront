import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskList = ({ task, settask, setactivity, setupdate, setedit }) => {

  const removehandler = (i) => {
    const filteritem = task.filter((item) => i !== item.id);
    console.log(filteritem);
    settask(filteritem);
  };

  const handalcomplete = (i) => {
    const updatedTasks = task.map((item) => {
      if (item.id === i) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    settask(updatedTasks);
  }

  const handaledit = (i) => {
    const finditem = task.find((item) => (
      i === item.id
    ))
    setupdate(false);
    setactivity(finditem.title);
    setedit(i);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {
        task.map((list) => (
          <div key={list.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-2 transform transition duration-300 ease-in-out hover:scale-105" >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110" onClick={() => handalcomplete(list.id)}>click</button>
            <span className={`flex-grow ml-4 text-lg ${list.completed ? "line-through" : ""}`}>{list.title}</span>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-110" onClick={() => handaledit(list.id)}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110" onClick={() => removehandler(list.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default TaskList;
