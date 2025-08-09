# JWT PRACTICE WITH NODE.JS & EXPRESS

This project is a hands-on practice for understanding JWT (JSON Web Tokens) authentication and authorization using Node.js, Express, and Zod for validation.

------------------------------------------------------------
### FEATURES
------------------------------------------------------------
```
- Login Route (/login) that:
  - Validates user credentials with Zod schema
  - Generates a JWT token with an expiry time
- Protected Route (/login/dashboard) that:
  - Uses a custom JWT verification middleware
  - Allows access only if a valid Bearer token is provided
- Example of manually creating and verifying JWT tokens without Express
- Environment variable-based JWT secret key using .env
```
------------------------------------------------------------
### TECH STACK
------------------------------------------------------------
```
- Node.js – Backend runtime
- Express.js – API routing
- jsonwebtoken – JWT token creation & verification
- Zod – Input validation
- dotenv – Secure environment variables
```
------------------------------------------------------------
### PROJECT STRUCTURE
------------------------------------------------------------
```
jwt-practice/
│
├── index.js               → Main Express app (login route & protected route)
├── verifyToken.js         → JWT verification middleware
├── index1.js           → Example of creating/verifying JWT without Express
├── .env                   → JWT secret key
├── package.json
```
------------------------------------------------------------
### INSTALLATION & SETUP
------------------------------------------------------------
```
1. Clone this repo:
   git clone <your-repo-url>
   cd jwt-practice

2. Install dependencies:
   npm install

3. Create a .env file:
   JWT_SECRET=your_secret_key

4. Start the server with nodemon (recommended):
   npx nodemon index.js
```
------------------------------------------------------------
### API ENDPOINTS
------------------------------------------------------------
```
1. LOGIN – Get JWT Token
   METHOD: POST
   URL: /login
   BODY (JSON):
   {
     "username": "pedri@example.com",
     "password": "123456"
   }
   RESPONSE:
   {
     "success": true,
     "message": "Login successfull",
     "token": "your.jwt.token"
   }

2. PROTECTED DASHBOARD
   METHOD: GET
   URL: /login/dashboard
   HEADERS:
   Authorization: Bearer your.jwt.token
   RESPONSE:
   {
     "message": "Welcome to dashboard",
     "data": {
       "username": "pedri@example.com",
       "iat": 1691234567,
       "exp": 1691238167
     }
   }
```
------------------------------------------------------------
### HOW JWT WORKS IN THIS PROJECT
------------------------------------------------------------
1. User logs in – Credentials are validated via Zod.
2. JWT is generated – Using jwt.sign(payload, secret, {expiresIn: "1h"}).
3. Client stores token – Typically in localStorage or cookies.
4. Protected routes check token – Middleware verifies token before allowing access.
5. Invalid or expired tokens – Server responds with 401 Unauthorized.

------------------------------------------------------------
#### WHAT I PRACTICED & LEARNED
------------------------------------------------------------
```
- Setting up JWT authentication in Node.js
- Using middlewares for token verification
- Validating inputs with Zod
- Securely storing secrets in .env
- Difference between creating/verifying JWT with and without Express routes
```

------------------------------------------------------------
FUTURE IMPROVEMENTS
------------------------------------------------------------
- Connect to a database for real user authentication
- Add refresh tokens
- Implement role-based authorization

