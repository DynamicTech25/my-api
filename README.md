# HNG Stage 1 – Personal API

## 📌 Project Description

This is a simple REST API built as part of the HNG DevOps Stage 1 task.
The API provides basic endpoints to check service status and return personal information.

The application is deployed on an AWS EC2 server and served publicly using Nginx as a reverse proxy.

---

## 🚀 Live URL

http://52.90.23.175  

---

## ⚙️ Tech Stack

* Node.js
* Express
* Nginx (Reverse Proxy)
* AWS EC2 (Ubuntu)

---

## 🧪 How to Run Locally

1. Clone the repository:

```
git clone https://github.com/DynamicTech25/hng-stage1-api.git
cd hng-stage1-api
```

2. Install dependencies:

```
npm install
```

3. Run the application:

```
node index.js
```

4. Access locally:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 1. GET /

Response:

```
{
  "message": "API is running"
}
```

---

### 2. GET /health

Response:

```
{
  "message": "healthy"
}
```

---

### 3. GET /me

Response:

```
{
  "name": "Damilola Balogun",
  "email": "damilolabalogun0407@gmail.com",
  "github": "https://github.com/DynamicTech25"
}
```

---

## ✅ Features

* Returns JSON responses
* Fast response time (<500ms)
* Deployed on a VPS
* Uses Nginx reverse proxy
* Process managed with PM2

---

## 📦 Deployment Details

* Application runs on port 3000 (private)
* Nginx routes public traffic (port 80) to the application
* PM2 ensures the app stays running

---

## 👤 Author

Damilola Balogun (DynamicTech25)
https://github.com/DynamicTech25
