<div align="center">

# 🌀 PassionLoop

### *Connect. Create. Belong.*

**A modern platform to discover, create, and join local hobby groups — built for people who believe in the power of shared passions.**

[![Live Client](https://img.shields.io/badge/🌐_Live_Site-PassionLoop-4CAF50?style=for-the-badge)](https://passionloop-b71a5.web.app/)
[![Live Server](https://img.shields.io/badge/🚀_Live_API-Vercel-black?style=for-the-badge)](https://passion-loop-server.vercel.app/)
[![Client Repo](https://img.shields.io/badge/📁_Client_Repo-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/mehedipolash/PASSIONLOOP-CLIENT)
[![Server Repo](https://img.shields.io/badge/📁_Server_Repo-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/mehedipolash/PASSIONLOOP-SERVER)

---

![PassionLoop Banner](https://placehold.co/1000x300/E6EEC9/4a7c59?text=PassionLoop+—+Your+Hobby+Community)

</div>

---

## 📌 Project Overview

**PassionLoop** is a full-stack MERN web application where users can explore and join local hobby-based groups or start their own — from book clubs and hiking crews to painting circles and gaming squads. It's designed to foster real-world social connections through shared interests.

---

## 🌐 Live Links

| Resource | URL |
|---|---|
| 🖥️ Client (Firebase) | https://passionloop-b71a5.web.app/ |
| ⚙️ Server (Vercel) | https://passion-loop-server.vercel.app/ |
| 📂 Client Repository | https://github.com/mehedipolash/PASSIONLOOP-CLIENT |
| 📂 Server Repository | https://github.com/mehedipolash/PASSIONLOOP-SERVER |

---

## ✨ Key Features

- 🔐 **Firebase Authentication** — Email/password and Google Sign-In with `emailVerified` check to block fake accounts. Persistent login across page refreshes using `onAuthStateChanged`.

- 🏘️ **Full Group Management** — Authenticated users can create, update, and delete their own hobby groups. Each group includes name, category, location, max members, start date, image, and organizer info.

- 🔒 **Protected Routes** — Pages like Create Group, My Groups, Group Details, and Update Group are private. Unauthenticated users are redirected to the login page and returned to their intended destination after login.

- 📅 **Expired Group Detection** — If a group's start date has passed, the "Join Group" button is automatically replaced with an "❌ Group Expired" indicator. Users cannot join inactive groups.

- 🎨 **Animated UI with Modern Libraries** — Built with `react-awesome-reveal`, `react-simple-typewriter`, and `react-tooltip` for smooth animations, typewriter effects, and contextual tooltips throughout the app.

- 🌙 **Dark / Light Theme Toggle** — Persistent theme switching powered by `localStorage` and DaisyUI's `data-theme` attribute — your preference is remembered across sessions.

- 📋 **My Groups Dashboard** — Logged-in users see only their own groups in a clean table view with Update and Delete actions. Deletes require confirmation via SweetAlert2.

- 🔄 **Upsert User Strategy** — On every login (including Google), the backend checks if the user exists. New users are inserted; existing users only have their `lastSignInTime` updated — no duplicate records.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| React Router v7 | Client-side Routing |
| Tailwind CSS + DaisyUI | Styling & UI Components |
| Firebase Auth | Authentication |
| Axios / Fetch API | HTTP Requests |
| SweetAlert2 + React Toastify | Notifications & Alerts |
| React Awesome Reveal | Scroll Animations |
| React Simple Typewriter | Typewriter Text Effect |
| React Tooltip | Hover Tooltips |
| React Icons | Icon Library |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | Server Framework |
| MongoDB + MongoDB Driver | Database |
| CORS | Cross-Origin Resource Sharing |
| dotenv | Environment Variable Management |
| Vercel | Server Deployment |

---

## 📁 Project Structure

```
PassionLoop-Client/
├── src/
│   ├── components/        # Reusable components (Navbar, Footer, GroupCard, etc.)
│   ├── layouts/           # MainLayout, AuthLayout
│   ├── pages/             # Home, AllGroups, CreateGroup, MyGroups, GroupDetails, UpdateGroup, SignIn, SignUp
│   ├── provider/          # AuthProvider, PrivateRoute
│   ├── router/            # React Router configuration
│   └── firebase.config.js

PassionLoop-Server/
├── server.js              # Express server + all API routes
├── vercel.json            # Vercel deployment config
└── .env                   # Environment variables (not committed)
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/groups` | Get all groups (or filter by `?email=`) | Public |
| `POST` | `/groups` | Create a new group | Private |
| `GET` | `/groups/:id` | Get a single group by ID | Private |
| `DELETE` | `/groups/:id` | Delete a group | Private |
| `PUT` | `/groups/:id` | Update a group | Private |
| `POST` | `/joins` | Join a group (duplicate check) | Private |
| `GET` | `/users` | Get all users | Private |
| `POST` | `/users` | Create or update user (upsert) | Public |

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Firebase project

### 1. Clone the repositories

```bash
git clone https://github.com/mehedipolash/PASSIONLOOP-CLIENT.git
git clone https://github.com/mehedipolash/PASSIONLOOP-SERVER.git
```

### 2. Setup the server

```bash
cd PASSIONLOOP-SERVER
npm install
```

Create a `.env` file:
```env
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
PORT=3000
```

```bash
node server.js
```

### 3. Setup the client

```bash
cd PASSIONLOOP-CLIENT
npm install
```

Create a `.env.local` file:
```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
```

```bash
npm run dev
```

---

## 📦 NPM Packages Used

```bash
# Client
npm install react-router firebase sweetalert2 react-toastify
npm install react-awesome-reveal react-simple-typewriter react-tooltip
npm install react-icons tailwindcss daisyui

# Server
npm install express cors dotenv mongodb
```

---

## 🔐 Environment Variables

### Client (`.env.local`)
```
VITE_APIKEY
VITE_AUTHDOMAIN
VITE_PROJECTID
VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID
VITE_APPID
```

### Server (`.env`)
```
DB_USER
DB_PASSWORD
PORT
```

---

## 📸 Pages at a Glance

| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| All Groups | `/allGroups` | Public |
| Group Details | `/group/:id` | 🔒 Private |
| Create Group | `/createGroup` | 🔒 Private |
| My Groups | `/myGroups` | 🔒 Private |
| Update Group | `/updateGroup/:id` | 🔒 Private |
| Sign In | `/auth/signin` | Public |
| Sign Up | `/auth/signup` | Public |
| 404 | `*` | Public |

---

## 🧑‍💻 Developer

<div align="center">

**Mehedi Polash**

[![GitHub](https://img.shields.io/badge/GitHub-mehedipolash-181717?style=flat-square&logo=github)](https://github.com/mehedipolash)

*Built with ❤️ as part of Assignment 10 — Category: Papaya*

</div>

---

<div align="center">

⭐ **If you like this project, give it a star on GitHub!** ⭐

</div>