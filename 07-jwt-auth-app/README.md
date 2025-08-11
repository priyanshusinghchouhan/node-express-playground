# 07-jwt-auth-app

A simple Node.js and Express app demonstrating JWT-based authentication with token verification and input validation using Zod.

---

Features

- User login with email and password validation using Zod schema
- JWT token generation on successful login (valid for 1 day)
- Protected dashboard route accessible only with a valid JWT token
- Middleware to verify and decode JWT tokens from Authorization headers
- Clean error handling for malformed or invalid tokens

---

Technologies Used

- Node.js
- Express.js
- JSON Web Tokens (jsonwebtoken)
- Zod for input validation
- dotenv for environment variable management

---

Setup and Installation
```
1. Clone the repository:

   git clone https://github.com/yourusername/07-jwt-auth-app.git
   cd 07-jwt-auth-app

2. Install dependencies:

   npm install

3. Create a .env file in the root directory and add your JWT secret:

   JWT_SECRET=your_jwt_secret_key_here

4. Start the server:

   node index.js

   or if you use nodemon:

   nodemon index.js

5. The app listens on port 3000.
```
---

API Endpoints
```
POST /login

Authenticate a user and receive a JWT token.

Request Body:

{
  "username": "user@example.com",
  "password": "yourpassword"
}

Response:

{
  "success": true,
  "message": "✅✅Login Successful",
  "token": "<jwt_token>"
}

---

GET /login/dashboard

Access a protected dashboard route.

Requires Authorization header with Bearer token:

Authorization: Bearer <jwt_token>

Response:

{
  "message": "🎆WELCOME TO DASHBOARD🎆",
  "data": {
    "username": "user@example.com",
    "iat": 1691779200,
    "exp": 1691865600
  }
}
```
---

Middleware

- verifyToken: Verifies JWT token from the Authorization header.
- Returns 400 if token is malformed.
- Returns 401 if token is invalid or expired.

---

Notes

- This app is for learning/demo purposes and does not implement actual user storage or password hashing.
- Always use HTTPS and secure JWT secret management in production.

---



