# 🧑‍💻 Express Users API

A simple Express.js REST API to **Create, Read, and Delete Users** using in-memory data. Built for learning and practicing core Express concepts like routes, dynamic params, and request handling.

---

## 📌 Features

- ➕ Create a new user (`POST /users`)
- 📋 List all users (`GET /users`)
- 🔍 Get user by ID (`GET /users/:id`)
- ❌ Delete user by ID (`DELETE /users/:id`)
- 🧠 Data is stored temporarily in-memory (no DB)

---

## 🚀 Getting Started

### Clone and Run Locally

```bash
# git clone https://github.com/priyanshusinghchouhan/your-repo-name.git
cd your-repo-name
npm install
node app.js

# Server runs on:
http://localhost:3000
```

---

## 📮 API Endpoints - Express Users API
```
➕ Create User
# POST /users

Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com"
}
Response:
{
  "message": "User Added",
  "data": {
    "id": 3,
    "name": "John Doe",
    "email": "john@example.com"
  }
}


📋 List All Users
# GET /users

Response:
{
  "message": "All Users",
  "data": [...]
}


🔍 Get User by ID
# GET /users/:id
Example: GET /users/2

Response:
{
  "message": "User Found",
  "data": {
    "id": 2,
    "name": "Pedri",
    "email": "pedri@example.com"
  }
}


❌ Delete User by ID
# DELETE /users/:id
Example: DELETE /users/1

Response:
{
  "message": "User Deleted",
  "data": {
    "id": 1,
    "name": "Priyanshu",
    "email": "ps@example.com"
  }
}
```

