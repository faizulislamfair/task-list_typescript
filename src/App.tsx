import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';


const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    }
    else {
      setDeadline(Number(event.target.value));
    }
  }


  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    if (task)
      setTaskList([...taskList, newTask]);

    setTask("");
    setDeadline(0);
  }


  return (
    <div className="App">
      <div className="header">
        <div className='inputContainer mt-5'>

          <input
            type="text"
            placeholder='Task...'
            name="task"
            value={task}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder='Deadline (Days)...'
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />

        </div>

        <button onClick={addTask} className='btn mt-5'>Add Task</button>

      </div>
      <div className="taskList grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 mt-12">
        {

          taskList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} />
          })

        }
      </div>
    </div>
  );
}

export default App;
