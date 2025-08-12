# 🚀 JWT Client-Server App
=====================

### Overview
--------
This project is a basic JWT authentication system with a Node.js + Express backend 
and a vanilla HTML/CSS/JS frontend.

It demonstrates:
- User login with hardcoded credentials
- JWT token generation and verification
- Protected API routes
- Simple frontend form handling and token-based requests

### Tech Stack
----------
Backend:
- Node.js
- Express.js
- jsonwebtoken
- dotenv
- cors

Frontend:
- HTML
- CSS
- JavaScript (Fetch API)

### Project Structure
-----------------
project/
│
├── server.js                # Main server file
├── routes/
│   └── dashboard.js         # Login + Protected route
├── .env                      # Environment variables
│
├── public/
│   ├── index.html            # Login form UI
│   ├── style.css             # Styling
│   └── script.js             # Frontend logic
│
└── README.txt

### Installation & Setup
--------------------
1. Clone the repo:
   git clone <repo-url>
   cd project

2. Install dependencies:
   npm install

3. Create `.env` file:
   JWT_SECRET=your_secret_key

4. Start the backend:
   node server.js
   Server runs at: http://localhost:3000

5. Open frontend:
   Open index.html in your browser (using Live Server or similar)
   Example: http://127.0.0.1:5500

### Usage
-----
1. Enter the login credentials:
   Email: admin@gmail.com
   Password: 123456

2. On successful login:
   - Server returns a JWT token
   - Token is sent in Authorization header to access /dashboard

3. Dashboard route returns protected data.

### API Endpoints
-------------

POST /login
Request Body:
{
  "username": "admin@gmail.com",
  "password": "123456"
}
Response:
{
  "token": "<JWT_TOKEN>"
}

GET /dashboard
Headers:
Authorization: Bearer <JWT_TOKEN>
Response:
{
  "message": "Welcome back, admin@gmail.com! 🔐",
  "data": ["📊 Dashboard data", "📈 Stats", "📁 Files"]
}

### Features
--------
- JWT Authentication (sign & verify)
- Protected routes
- CORS enabled for frontend connection
- Clean UI login form
- Token-based requests from frontend

### Notes
-----
- Credentials are hardcoded for demo purposes.
- In a real app, use a database and password hashing (bcrypt).
- Token expiration is set to 1 hour.

