MIDDLEWARE & ROUTE PROTECTION PRACTICE (NODE + EXPRESS)

This project demonstrates how to use custom middleware in Express.js to protect routes based on authentication logic. It includes both query parameter-based checking (commented example) and token-based checking via the Authorization header.

------------------------------------------------------------
FEATURES
------------------------------------------------------------
- Custom middleware (`isLoggedIn`) to verify access before allowing route execution
- Route protection using a token provided in request headers
- Example setup for query parameter-based authorization
- Simple `/users/profile` route that only works if the request passes authentication
- Basic Express.js server setup

------------------------------------------------------------
TECH STACK
------------------------------------------------------------
- Node.js – Backend runtime
- Express.js – Routing & middleware handling

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------
middleware-protection/
│
├── index.js               → Main server file
├── routes/
│   └── userRoutes.js      → Defines the `/users/profile` route
├── middlewares/
│   └── isLoggedIn.js      → Middleware that validates token or query param
├── package.json

------------------------------------------------------------
INSTALLATION & SETUP
------------------------------------------------------------
1. Clone the repository:
   git clone <your-repo-url>
   cd middleware-protection

2. Install dependencies:
   npm install

3. Start the server:
   npx nodemon index.js
   (You can also run with `node index.js` but nodemon auto-restarts on file changes)

------------------------------------------------------------
API ENDPOINTS
------------------------------------------------------------
1. HOME ROUTE
   METHOD: GET
   URL: /

   RESPONSE:
   "hello from home route"

2. PROTECTED PROFILE ROUTE
   METHOD: GET
   URL: /users/profile

   HEADER-BASED ACCESS:
   HEADERS:
   Authorization: Bearer 12345996

   RESPONSE IF VALID TOKEN:
   {
     "message": "Welcome to your profile"
   }

   RESPONSE IF MISSING OR INVALID TOKEN:
   {
     "message": "Unauthorized"
   }

   (ALTERNATIVE: Using query parameter check — commented in middleware code)
   Example:
   /users/profile?isAuthor=true

------------------------------------------------------------
HOW THE MIDDLEWARE WORKS
------------------------------------------------------------
1. Looks for `Authorization` header in the format:
   Bearer <token>
2. If the header is missing or doesn't start with `Bearer ` → returns 401 Unauthorized
3. Extracts token value and compares it to `12345996`
4. If token matches → calls `next()` to allow route execution
5. If token doesn't match → returns 401 Unauthorized

------------------------------------------------------------
WHAT I PRACTICED & LEARNED
------------------------------------------------------------
- Creating custom middleware in Express.js
- Using `next()` to pass control to the next function
- Protecting routes with both query params and header-based tokens
- Structuring routes and middlewares in separate files
