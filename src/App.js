import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [task, setTasks] = useState([
    {
        id:1,
        text:"Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id:2,
        text:"DC Assignment",
        day: "Sep 5th at 2:30pm",
        reminder: true,
    },
    {
        id:3,
        text:"Grocery",
        day: "Nov 5th at 2:30pm",
        reminder: true,
    },
    {
        id:4,
        text:"Exams",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    }
])
  return (
    <div className="container">
      <Header />
      <Task task = {task}/>
    </div>
  );
}

export default App;
