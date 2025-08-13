# Dummy User Management API

A simple RESTful API built with Express.js to manage users with basic CRUD operations. It includes validation middleware using express-validator to ensure data correctness.

---

### Features

- Create a new user (POST /users)
- Retrieve all users (GET /users)
- Retrieve a user by ID (GET /users/:userid)
- Update a user completely (PUT /users/:userid)
- Partially update a user (PATCH /users/:userid)
- Delete a user (DELETE /users/:userid)
- Request validation for user data (name and email)

---

### Technologies Used

- Node.js
- Express.js
- express-validator

---

### Getting Started

Prerequisites

- Node.js (v12+)
- npm

### Installation
```
1. Clone the repository
   git clone https://github.com/yourusername/user-management-api.git

2. Navigate to the project directory
   cd user-management-api

3. Install dependencies
   npm install

4. Start the server
   node index.js

The server will start on port 3000 by default.
```
---

### API Endpoints
```
Method   Endpoint             Description                      Request Body
------   --------             -----------                      ------------
POST     /users               Create a new user                { "name": "John", "email": "john@example.com" }
GET      /users               Get all users                   N/A
GET      /users/:userid       Get user by ID                  N/A
PUT      /users/:userid       Update entire user by ID        { "name": "New Name", "email": "newemail@example.com" }
PATCH    /users/:userid       Partially update user fields    { "name": "New Name" } or { "email": "newemail@example.com" }
DELETE   /users/:userid       Delete user by ID               N/A
```
---

### Validation Rules

- name is required and must be at least 3 characters long
- email is required and must be a valid email format

If validation fails, the API returns status 400 with error details.

---

### Example Request using curl
```
Create a user:

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'
```
---

### Project Structure
```
.
├── controllers
│   └── userController.js       # Logic for user CRUD operations
├── middleware
│   └── userMiddleware.js       # Validation middleware
├── routes
│   └── userRoutes.js           # User routes setup
├── index.js                    # Entry point and server setup
├── package.json
└── README.md
```
---

Notes

- Data is stored in-memory (an array). Restarting the server will reset the data.
- This project is intended for learning and prototyping purposes.

---

License

This project is licensed under the MIT License.

---

Feel free to contribute or raise issues!
Happy coding 🚀

