# 🚀 Next.js REST API (Backend Architecture *Practice*)

This project is a structured backend API built using Next.js App Router.
It focuses on **clean architecture, separation of concerns, and real backend practices** instead of simple route-based coding.

---

## 📌 Features

* REST API with proper HTTP methods
* Clean architecture (Controller → Service → DB)
* Input validation
* Structured API responses
* Soft delete (no permanent data loss)
* UUID-based user IDs
* File-based database (for learning purpose)

---

## 🧠 Tech Stack

* Next.js (App Router)
* TypeScript
* Node.js (fs module)
* File-based JSON storage

---


## ⚙️ API Endpoints

### 📥 Get All Users

```
GET /api/users
```

* Returns all non-deleted users

---

### ➕ Create User

```
POST /api/users
```

#### Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Responses:

* `201` → Created
* `400` → Validation error
* `409` → Duplicate email

---

### ✏️ Update User

```
PATCH /api/users/:id
```

#### Body:

```json
{
  "name": "Updated Name"
}
```

#### Responses:

* `200` → Success
* `404` → User not found

---

### ❌ Delete User (Soft Delete)

```
DELETE /api/users/:id
```

* Marks user as deleted instead of removing

---

## 📦 Response Format

### ✅ Success

```json
{
  "success": true,
  "data": {}
}
```

### ❌ Error

```json
{
  "success": false,
  "error": "Error message"
}
```

---

## 🧠 Key Concepts Learned

* Separation of concerns (Controller vs Service vs DB)
* REST API design principles
* Proper HTTP status codes
* Validation and error handling
* Soft delete vs hard delete

---

## ⚠️ Limitations (Important)

This project is **NOT production-ready**.



## 🧪 How to Run

```bash
npm install
npm run dev
```

Server runs on:

```
http://localhost:3000
```

# This is a practice project