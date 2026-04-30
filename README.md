#  User Service API

**Next.js + TypeScript + MongoDB (Mongoose)**

A production-style backend service built using **Next.js App Router**, **MongoDB**, and **Mongoose**, focusing on **clean architecture**, **scalability**, and **backend best practices**.

---

##  Overview

This project is not just a CRUD API. It demonstrates how to build a **structured backend service** with:

* Safe **database connection handling**
* Clean **service-layer architecture**
* Efficient **pagination & filtering**
* **Indexing** for performance
* Basic **rate limiting**
* Standardized **error handling**
* Full **TypeScript support**


---

##  Tech Stack

* Next.js App Router
* MongoDB
* Mongoose
* TypeScript

---

##  Environment Setup

### 1. Create `.env.local`

```env
MONGODB_URI=mongodb://127.0.0.1:27017/user-service
```

 For MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/user-service
```

---

##  Getting Started

```bash
npm install
npm run dev
```

Server will run at:

```
http://localhost:3000
```

---

##  API Endpoints



### GET `/api/users` → Get all users

```http
GET /api/users
```

---

### Pagination

```http
GET /api/users?page=1
GET /api/users?limit=2
```

---

###  Filtering

```http
GET /api/users?name=smith
```

---

###  Combined Query (Recommended)

```http
GET /api/users?page=1&limit=2&name=smith
```

---

###  POST `/api/users` → Create user

```http
POST /api/users
```

#### Body:

```json
{
  "name": "dikshith",
  "email": "dikshith@example.com"
}
```

---

###  DELETE `/api/users/[id]` → Delete user

```http
DELETE /api/users/{id}
```

---

##  Features Explained



###  Database Connection (Singleton)

* Prevents multiple DB connections in Next.js dev mode
* Uses global caching
* Ensures efficient resource usage

---

###  Pagination

* Uses `skip` and `limit`
* Avoids loading large datasets
* Essential for scalability

---

###  Indexing

* Email field is indexed
* Improves query performance significantly

---

###  Filtering

* Supports filtering by `name`

---

###  Rate Limiting

* Limits number of requests per IP
* Prevents API abuse
*  In-memory (not suitable for distributed systems)

---

###  Service Layer

* Separates business logic from routes
* Improves maintainability and scalability

---

###  Standard Response Format

```json
{
  "success": true,
  "data": {}
}
```

Error format:

```json
{
  "success": false,
  "message": "Error message"
}
```

##  Key Learnings

* Why DB connection reuse is critical in Next.js
* How indexing improves performance
* Why pagination is necessary
* Clean backend architecture patterns
* Proper API design & error handling

---

