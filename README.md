# ChatSi 🤖

A full-stack real-time chat application built with the **MERN stack (MongoDB, Express.js, React, Node.js)**, styled with Tailwind CSS + DaisyUI, and using **Stream Chat API** for real-time messaging.

---

## ⚙️ Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)
![Stream](https://img.shields.io/badge/Stream-0064FE?style=flat&logo=stream&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-FF79C6?style=flat&logo=daisyui&logoColor=white)

---


## 🚀 Features

- Modern chat UI with 30+ custom themes.
- Real-time messaging with Stream Chat API
- JWT authentication  
- Stores conversations in MongoDB  
- Responsive design with Tailwind CSS + DaisyUI  
- Modular React components  
- Secure environment variables

---

## 🛠️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone https://github.com/vedantb23/ChatSi
cd ChatSi
```

2️⃣ Install server dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```
PORT=5001
MONGO_URI= YOUR DB URL
MONGO_PASS= DB PASSWORD
STEAM_API_KEY= STREAM API KEY 
STEAM_API_SECRET= STEAM API SECRET
JWT_SECRET_KEY= YOUR SECRET KEY 
# NODE_ENV=production
NODE_ENV=development

GOOGLE_CLIENT_ID= CLIENT ID 
GOOGLE_CLIENT_SECRET= SECRET
```

3️⃣ Install client dependencies

```bash
cd ../frontend
npm install
```
Create a `.env` file inside `frontend`:

```
VITE_API_URL= BACKEND URL FOR PRODUCTION ONLY 
VITE_SECRET_KEY= SECRET
VITE_STREAM_API_KEY= STREAM API KEY  
VITE_STREAM_API_SECRET= STEAM API SECRET
# MODE=production
MODE=development
VITE_CLIENT_ID= YOUR ID
```
4️⃣ Run the app

In one terminal (back-end):

```bash
cd backend
npm run dev
```

In another terminal (front-end):

```bash
cd frontend
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## 🌐 Deployment
 [https://chat-si-sigma.vercel.app/](https://chat-si-sigma.vercel.app/)
---

## 📂 Project Directory Structure

```
ChatSi/
├── frontend/                    
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── backend/                    
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
└── README.md
```

---
## 🔭 Future Scope
- AI CHAT BOT  
- Public Tweet  
- Conversation search and filtering
- Email notifications for friend requests  
- Role-based access control  
- Admin dashboard  

---

⭐ **If you like this project, please give it a star!** ⭐

