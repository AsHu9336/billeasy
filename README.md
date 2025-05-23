﻿📚 Book Review API
 
A simple RESTful API for managing books and reviews built with Node.js, Express, MongoDB, and JWT authentication.

🚀 Features
- JWT-based Authentication
- CRUD for Books and Reviews
- One review per user per book
- Pagination for books and reviews
- Search books by title or author (partial, case-insensitive)

⚙️ Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt for password hashing
- dotenv for environment management


📁 Project Structure
/controllers
/models
/routes
/middleware
seeder.js
app.js


🔑 Environment Variables
Create a .env file in the root:

PORT=5000

MONGO_URI=mongodb://localhost:27017/bookreview

JWT_SECRET=your_jwt_secret


📦 Install & Run
bash
git clone <repo-url>

cd book-review-api

npm install

npm run dev


📮 API Endpoints
Auth
  - POST /api/signup
  - POST /api/login

Books
  - POST /api/books (auth)
  - GET /api/books?page=1&limit=5&author=&genre=
  - GET /api/books/:id

Reviews
  - POST /api/books/:id/reviews (auth)
  - PUT /api/reviews/:id (auth)
  - DELETE /api/reviews/:id (auth)

Search
  - GET /api/search?q=title_or_author



