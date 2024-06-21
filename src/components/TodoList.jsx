import React, { useState } from 'react';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [activity, setactivity] = useState('');
  const [task, settask] = useState([]);
  const [update,setupdate] = useState(true);
  const [edit,setedit] = useState(null);


  const removeall =()=>{
    settask([]);
  }
  const handalchange = (e) => {
    console.log(e.target.value);
    setactivity(e.target.value);
  };

  const changeupdate = () => {


    if(activity == ""){
      alert("please fill the input box")
    }
   else if(!update){
      settask(task.map((newele)=>{
        if(newele.id === edit){
          return{...newele,title:activity}
        }
        return newele
      }))
      setactivity("")
      setupdate(true)
      setedit(null)
    }
    else{
      const allactivity ={id:uuidv4() , title:activity ,completed: false}
    console.log(allactivity)
    settask([...task, allactivity]);
    
    setactivity('');
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
        <div className="flex justify-center mb-4">
          <input 
            type="text" 
            className="w-2/3 border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activity} 
            onChange={handalchange} 
            placeholder="Add a new task"
          />

          {
            update?(<><button 
              onClick={changeupdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
            >
              Add
            </button></>):(<><button 
            onClick={changeupdate}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
          >
            Update
          </button></>)
          }
          
        </div>
        <TaskList task={task} settask={settask} setactivity={setactivity} setupdate={setupdate} setedit={setedit} />
      </div>

<div className='-mt-[250px]'>

  {
    task.length>0?(
      <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-lg -mt-[100px]" onClick={removeall}>Remove All</button>

    ):(
      <></>
    )
  }
</div>
    </>
  );
}

export default TodoList;
