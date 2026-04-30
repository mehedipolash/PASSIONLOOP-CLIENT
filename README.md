
# 🎯 PassionLoop — Local Hobby Group Organizer

<div align="center">

![PassionLoop Banner](https://img.shields.io/badge/Project-PassionLoop-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Auth-Firebase-FFCA28?style=for-the-badge&logo=firebase)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)
![Vercel](https://img.shields.io/badge/Hosted-Vercel-black?style=for-the-badge&logo=vercel)

### 🚀 Discover. Create. Join. Grow Communities Through Passion.

</div>

---

## 🌐 Live Links

🔴 **Client Live Site:**  
https://passionloop-b71a5.web.app/

🟢 **Server API:**  
https://passion-loop-server.vercel.app/

📦 **Client Repository:**  
https://github.com/mehedipolash/PASSIONLOOP-CLIENT

⚙️ **Server Repository:**  
https://github.com/mehedipolash/PASSIONLOOP-SERVER

---

# 📌 Project Overview

**PassionLoop** is a modern hobby-based social platform where users can:

✅ Discover local hobby groups  
✅ Create their own communities  
✅ Join groups based on passion  
✅ Manage created groups  
✅ Connect through shared interests  

Whether it’s painting, photography, hiking, reading, gaming, or cooking — PassionLoop helps people find their tribe.

---

# ✨ Key Features

## 🔐 Authentication System
- Email & Password Login/Register
- Google Sign In
- Private Protected Routes
- Persistent Login after refresh
- SweetAlert & Toast notifications

## 🏡 Home Page
- Attractive Hero Banner / Slider
- Featured Groups Section
- Two Extra Custom Sections
- Fully Responsive Layout

## 👥 Group Management
- Create New Hobby Group
- Update Existing Group
- Delete Group
- View Full Group Details
- Join Group Functionality

## 📋 My Groups Dashboard
- Shows only logged-in user's groups
- Update / Delete controls
- Secure private route

## 📱 Fully Responsive
- Mobile Friendly
- Tablet Optimized
- Desktop Perfect UI

---

# 🛠️ Technologies Used

## Frontend
- React
- React Router
- Tailwind CSS
- DaisyUI
- React Toastify
- SweetAlert2
- React Awesome Reveal
- React Simple Typewriter

## Backend
- Node.js
- Express.js
- MongoDB Atlas

## Authentication
- Firebase Authentication

## Deployment
- Firebase Hosting (Client)
- Vercel (Server)

---

# 🔒 Environment Variables Used

## Client (.env.local)

```env
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
````

## Server (.env)

```env
DB_USER=
DB_PASSWORD=
PORT=
```

---

# 📂 Project Structure

## Client Side

```bash
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── provider/
 ├── routes/
 └── firebase.config.js
```

## Server Side

```bash
server/
 ├── index.js
 ├── package.json
 └── vercel.json
```

---

# 📍 Main Routes

| Route            | Access  |
| ---------------- | ------- |
| /                | Public  |
| /allGroups       | Public  |
| /group/:id       | Private |
| /createGroup     | Private |
| /myGroups        | Private |
| /updateGroup/:id | Private |
| /auth/signup     | Public  |
| /auth/signin     | Public  |

---

# 🎯 Assignment Requirements Completed

✅ Navbar with Conditional Auth UI
✅ Home Page with Slider
✅ Featured Groups
✅ Create Group Page
✅ Group Details Page
✅ All Groups Page
✅ My Groups Page
✅ Update Group Page
✅ Delete with Confirmation
✅ Private Routes
✅ Persistent Login after Refresh
✅ 404 Error Page
✅ Loading Spinner
✅ Firebase + MongoDB Security
✅ Unique Responsive Design
✅ SweetAlert / Toast Messages
✅ React Packages Implemented

⚠️ Dark / Light Mode Toggle *(Not Added Yet)*

---

# 🚀 How to Run Locally

## Clone Client

```bash
git clone https://github.com/mehedipolash/PASSIONLOOP-CLIENT.git
cd PASSIONLOOP-CLIENT
npm install
npm run dev
```

## Clone Server

```bash
git clone https://github.com/mehedipolash/PASSIONLOOP-SERVER.git
cd PASSIONLOOP-SERVER
npm install
nodemon index.js
```

---

# 💡 Future Improvements

* Dark / Light Theme Toggle
* JWT Authentication
* Real-time Chat
* Group Member Count
* Search & Filter Groups
* Pagination
* Admin Dashboard

---

# 👨‍💻 Developer

### Mehedi Hasan

💼 Passionate MERN Stack Developer
🚀 Loves building real-world scalable apps
🎯 Focused on clean UI + smart backend logic

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

---

# 🔥 Final Note

**PassionLoop is not just a project — it's a place where passion meets people.**


