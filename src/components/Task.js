import { useState } from "react"
// const tasks = [
    // {
    //     id:1,
    //     text:"Doctors Appointment",
    //     day: "Feb 5th at 2:30pm",
    //     reminder: true,
    // },
    // {
    //     id:2,
    //     text:"DC Assignment",
    //     day: "Sep 5th at 2:30pm",
    //     reminder: true,
    // },
    // {
    //     id:3,
    //     text:"Grocery",
    //     day: "Nov 5th at 2:30pm",
    //     reminder: true,
    // },
    // {
    //     id:4,
    //     text:"Exams",
    //     day: "Feb 5th at 2:30pm",
    //     reminder: true,
    // }
// ]

const task = () => {
    const [tasks, setTasks] = useState([
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
    <>
        {tasks.map((task) => (<h3>{tasks.text}</h3>))}
    </>
  )
}

export default Task