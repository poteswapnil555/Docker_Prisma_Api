# docker-prisma-api

A containerized RESTful API built with Node.js, Express, and Prisma ORM. It supports full CRUD operations for users and blogs, includes pagination, upsert, and relational queries. Fully dockerized for easy deployment and scalability.

## 🚀 Features

* Prisma ORM with PostgreSQL
* Docker & Docker Compose support
* CRUD APIs for User and Blog
* Upsert logic for users
* Pagination for user listings
* Relational data fetching (blogs, notification methods)
* Centralized error handling middleware

## 🛠️ Tech Stack

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* Docker & Docker Compose

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/poteswapnil555/Docker_Prisma_Api.git
cd docker-prisma-api
```

### 2. Environment Setup

Create a `.env` file based on the example:

```bash
cp .env.example .env
```

### 3. Build and Start with Docker

```bash
docker-compose up --build
```

### 4. Prisma Setup

```bash
docker-compose exec app npx prisma migrate dev --name init
```

## 📌 API Endpoints

### User APIs

* `POST /api/user` - Create new user
* `PUT /api/user/:id` - Update user
* `DELETE /api/user/:id` - Delete user
* `GET /api/users` - Get all users
* `GET /api/user/:id` - Get user details
* `POST /api/user/upsert` - Upsert user

### Blog APIs

* `POST /api/blog` - Create new blog for a user

## 🧪 Testing (Optional)

```bash
docker-compose exec app npm run test
```

## 📁 Project Structure

```
├── src/
│   ├── app.js
│   ├── controllers/
│   ├── middlewares/
│   └── prisma/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── package.json
└── README.md
```

