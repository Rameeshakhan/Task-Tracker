import IndTask from "./IndTask";

const Task = ({ task }) => {

    return (
    <>
        {task.map((task) => {
          <IndTask key = {task.id}task = { task }/>
        })}
    </>
  )
}

export default Task;