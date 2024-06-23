# Task Management Application

This is a simple task management application built with a React frontend and a Node.js backend. The frontend uses Tailwind CSS for styling.

## Features

- Add tasks with a title, description, and due date
- Edit existing tasks
- Delete tasks
- View a list of tasks

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

Follow these steps to set up and run the application locally.

### Backend Setup

1. Clone the repository and navigate to the `backend` directory:

   ```bash
   git clone <repository-url>
   cd backend

2. Install the backend dependencies:

npm install
Start the backend server:

3. Start the backend server:
node index.js
The backend server will run on http://localhost:3000.

### Frontend Setup

1. Open a new terminal window, navigate to the frontend directory:
cd ../frontend

2. Install the frontend dependencies:
npm install

3. Start the frontend development server:
npm start
The frontend server will run on http://localhost:3000.

### Project Structure
The project structure is as follows:

- backend
  - index.js
  - package.json
- frontend
  - public
  - src
    - components
      - AddTask.js
      - EditTask.js
      - TaskList.js
    - App.js
    - index.js
  - package.json
- README.md


### API Endpoints
The backend server exposes the following API endpoints:

GET /tasks - Retrieve all tasks
POST /tasks - Add a new task
PUT /tasks/:id - Update a task
DELETE /tasks/:id - Delete a task

1. Adding a Task
To add a task, enter the task details in the form and click the "Add Task" button.

2. Editing a Task
To edit a task, click the "Edit" button next to the task. Update the task details in the form and click the "Update Task" button.

3. Deleting a Task
To delete a task, click the "Delete" button next to the task.