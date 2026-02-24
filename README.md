# 🗄️ Task Manager API (Mock Backend)

A mock API built with **json-server** to serve as the backend for the Task Manager project.

This repository was created to simulate a real-world integration environment between frontend and backend applications, maintaining a clear separation of responsibilities.

🔗 Frontend Repository: https://github.com/nicolasandreos/Task-Manager-React  
🚀 Frontend Deployment: https://task-manager-react-six-rho.vercel.app/

---

## 📦 Technologies Used

- Node.js
- json-server

---

## 🎯 Purpose

Simulate a REST API to:

- Create tasks  
- List tasks  
- Update tasks  
- Delete tasks  
- Update task status  

The structure follows RESTful standards to replicate a real backend environment.

---

## 🛠️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/task-manager-api.git

# Navigate into the project folder
cd task-manager-api

# Install dependencies
npm install

# Start the server
npx json-server --watch db.json --port 3000
```

The API will be available at:

```
http://localhost:3000
```
