# 📚 Course Selling App - Backend

Welcome to the backend of the **Course Selling App**!  
This is where all the behind-the-scenes magic happens — managing users, courses, authentication, and more.  
Think of it as the **engine** that powers your online learning platform 🚀.

---
## Purpose:
This project is for practice only — ideal for learning REST API design, CRUD operations, authentication, and role-based functionality in a fun, unrestricted way.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime for server-side logic
- **Express.js** – Minimal and flexible web framework
- **MongoDB + Mongoose** – NoSQL database for storing users, courses, and more
- **JWT (JSON Web Token)** – Secure authentication
- **dotenv** – Environment variable management
- **Postman** - For testing
---

## ✨ Features

### Admins can:
```
Create new courses

Edit course details

Delete courses

Manage users
```
### Users can:
```
View available courses

Access in courses

Manage their account details
```

### Special Twist:
```
Any logged-in user can also perform admin actions, making it perfect for learning and testing CRUD APIs without real-world restrictions.
```
---

## 📂 Project Structure
```
course-selling-app-backend/
│
├── routes/ # All API routes (users, admins, courses)
├── models/ # Mongoose models (User, Admin, Course)
├── Middleware/ # JWT authentication middleware
├── db.js
├── index.js # Entry point

```
---


---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```
git clone https://github.com/priyanshusinghchouhan/course-selling-app-backend.git
cd course-selling-app-backend
```

### 2️⃣ Install Dependencies
```
npm init -y
npm install jsonwebtoken mongoose dotenv
```

### 3️⃣ Set up environment variables
#### Create a .env file in the root folder:
```
MONGO_URL =Your_Mongo_URL/course-Selling-App-Backend
JWT_ADMIN_PASSWORD = Your_Admin_Password;
JWT_USER_PASSWORD = Your_User_Password;
```

### 4️⃣ Start the server
```
node index.js
```
#### The backend will start on:
```
http://localhost:3000
```

### 🚀 Future Improvements
```
Payment gateway integration (Stripe/Razorpay)

Search & filter courses

Email notifications

Course ratings & reviews

File uploads for course content
```

### 🧑‍💻 Contributing
```
Pull requests are welcome!
If you find a bug or have a feature request, open an issue and let's discuss.
```

