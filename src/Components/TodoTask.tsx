import React from 'react';
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className='task'>
            <div className="card w-96 bg-neutral shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button onClick={() => { completeTask(task.taskName) }} className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <p className='text-white'>{task?.taskName}</p>
                    <p className='text-white'>{task?.deadline}</p>
                </div>
            </div>
        </div >
    );
};

export default TodoTask;