import React, { useState } from "react";

const ToDoList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskContent, setTaskContent] = useState("");
  const [isDone, setIsDone] = useState(false);


  const handleSubmit = (event) => {
      event.preventDefault();
      const newTask = {
        taskContent,
        "isDone": false,
      };
      setTasks([...tasks, newTask]);
      setTaskContent("");
      console.log(newTask);
    };
    console.log(tasks);

  const handleDelete = (event, delIndex) => {
    event.preventDefault();
      const filteredTasks = tasks.filter((task, i) =>{
          return delIndex !== i;
        });
        setTasks(filteredTasks);
        console.log("delIndex:", delIndex);
  };

  const setStatus = (i) => {
      const copiedTasks = [...tasks];
      copiedTasks[i].isDone = !copiedTasks[i].isDone;

      setTasks(copiedTasks);
  }
  return (
    <div>
      <form onSubmit = {(event) => {
          handleSubmit(event);
      }}>
        <input
          style={{ borderRadius: "5px" }}
          onChange = {(event) =>{
              setTaskContent(event.target.value);
          }}
          value = {taskContent}
        ></input>
        <div>
          <button>Add</button>
        </div>
      </form>
      {tasks.map((task, i) => {
          return (
              <div>
            {/* // <form key={i}> */}
                <label  style={{textDecoration: task.isDone && 'line-through', color: task.isDone && 'grey'}}>{ task.taskContent }</label>
                <input type="checkbox" checked={task.isDone} onChange={(event) => {
                    setStatus(i);
                    
            }}></input>
            <button id={i}
                onClick = {(event) => {
                    handleDelete(event, i);
                }}
                >Delete</button>
            {/* // </form> */}
            
            </div>
          );
      })}
    </div>
  );
};
export default ToDoList;


