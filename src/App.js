import React, { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text : "Food shopping",
            day : "feb 5th at 2;30pm",
            reminder : false,
        },
        {
            id: 2,
            text : "A Date with Sonia",
            day : "Jan 8th at 12;30pm",
            reminder : false,
        },
        {
            id: 3,
            text : "Late Edim's Birthday",
            day : "April 1st at 1;00am",
            reminder : false,
        }
    ]
);

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task))
}

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? 
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} /> : 
        "No Tasks available for now"}
    </div>
  );
}

export default App;
