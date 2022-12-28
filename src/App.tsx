import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
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
      <div className="taskList"></div>
    </div>
  );
}

export default App;
