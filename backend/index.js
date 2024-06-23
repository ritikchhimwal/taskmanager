const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const API = "https://taskmanager-frontend-gilt.vercel.app/";

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

let tasks = [];

app.get('API/tasks', (req, res) => {
  try {
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
});

app.post('API/tasks', (req, res) => {
  try {
    const task = { id: Date.now(), ...req.body };
    tasks.push(task);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add task' });
  }
});

app.put('API/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = req.body;
    tasks = tasks.map(task => (task.id === parseInt(id) ? { ...task, ...updatedTask } : task));
    const updatedTaskFromList = tasks.find(task => task.id === parseInt(id));
    res.json(updatedTaskFromList);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task' });
  }
});

app.delete('API/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
