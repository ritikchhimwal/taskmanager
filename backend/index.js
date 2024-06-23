const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const frontendURL = 'https://taskmanager-frontend-gilt.vercel.app';

// Configure CORS to allow requests from frontend URL
app.use(cors({
  origin: frontendURL,
}));

// Body parser middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

let tasks = [];

// Endpoint to get all tasks
app.get('/api/tasks', (req, res) => {
  try {
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
});

// Endpoint to add a task
app.post('/api/tasks', (req, res) => {
  try {
    const task = { id: Date.now(), ...req.body };
    tasks.push(task);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add task' });
  }
});

// Endpoint to update a task
app.put('/api/tasks/:id', (req, res) => {
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

// Endpoint to delete a task
app.delete('/api/tasks/:id', (req, res) => {
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
