import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    }
    else {
      setDeadline(Number(event.target.value));
    }
  }

  return (
    <div className="App">
      <div className="header">
        <div className='inputContainer mt-5'>

          <input
            type="text"
            placeholder='Task...'
            name="task"
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder='Deadline (Days)...'
            name="deadline"
            onChange={handleChange}
          />

        </div>
        <button className='btn mt-5'>Add Task</button>
      </div>
      <div className="taskList"></div>
    </div>
  );
}

export default App;
