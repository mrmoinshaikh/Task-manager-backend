# Task Manager Backend API

A backend REST API built using Node.js, Express.js, MongoDB, and JWT authentication.

## Features
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Task CRUD Operations
- MongoDB Integration

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## API Endpoints

### Auth Routes
POST /api/v1/auth/register  
POST /api/v1/auth/login

### Task Routes
GET /api/v1/tasks  
POST /api/v1/tasks  
PUT /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id

## Installation

```bash
git clone <repo-url>
cd task-manager-backend
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

## Run Project

```bash
npm run dev
```

## Author
Moinuddin Shaikh
