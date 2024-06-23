import React, { useState } from 'react';
import EditTask from './EditTask';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-2 p-2 border">
            {editingTask === task.id ? (
              <EditTask task={task} onUpdate={(updatedTask) => {
                onUpdate(updatedTask);
                setEditingTask(null);
              }} />
            ) : (
              <>
                <h2 className="text-xl">{task.title}</h2>
                <p>{task.description}</p>
                <p>Due: {task.dueDate}</p>
                <button onClick={() => setEditingTask(task.id)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
                <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
