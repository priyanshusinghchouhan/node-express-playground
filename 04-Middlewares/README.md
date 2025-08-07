# 🛡️ Express Middleware Playground

This project demonstrates the use of **custom middleware** functions in an Express.js application. Each middleware adds specific functionality to different routes like logging, age verification, request counting, and basic rate-limiting.

## 📁 Project Structure
```
.
├── index.js                          // Main server file
└── customMiddlewares/
    ├── logger.js                     // Logs request details
    ├── auth.js                       // Age-based access control
    ├── requestCount.js               // Counts how many times the route was accessed
    └── ratelimiter.js                // Blocks frequent requests from the same user/IP
```
## 🧠 Middleware Overview

### 1. `logger.js`
```
Logs incoming request method and path.
```

### 2. auth.js
```
Checks if the :age in the URL parameter is >= 18. If not, it blocks the request.
```

### 3. requestCount.js
```
Counts and tracks how many times a user has accessed the /users/:age route during the session.
```

### 4. ratelimiter.js
```
Basic rate-limiter that blocks too many requests from the same user within a short period.
```


## 🚀 Run the Server
```
node index.js
```

