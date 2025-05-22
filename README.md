# 🌟 HobbyHub – A Local Hobby Group Organizer

🔗 **Live Website:**   
📦 **Client Repo:**     (https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-Alireja-khan)  
🛠 **Server Repo:**      (https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-Alireja-khan)

---

## 📌 Key Features

- 👤 **Authentication & Authorization**  
  Email/Password + Google Login, Private Routes, and Role-based data display. Auth state persists even after refreshing.

- 🧩 **Create & Join Hobby Groups**  
  Users can create or join groups like painting, hiking, gaming, etc. with real-time validation.

- 📊 **Group Management System**  
  Logged-in users can view, update, or delete their own created groups from "My Groups" page.

- 🔐 **Protected Routes & Environment Variables**  
  Private routes for Create, My Groups, and Group Details. Firebase and MongoDB credentials are secured using `.env`.

- 🖼️ **Beautiful Responsive UI**  
  Built using Tailwind CSS, with clean layouts, Lottie animations, Typewriter effect, and theme toggle (dark/light).

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Vite
- **Authentication**: Firebase
- **Backend**: Node.js, Express, MongoDB
- **Hosting**: Surge (Client), Vercel (Server)
- **Packages Used**:
  - `react-awesome-reveal` – for animations
  - `react-simple-typewriter` – for banner text effect
  - `react-hot-toast` – for error/success messages
  - `sweetalert2` – for action confirmations
  - `lottie-react` – for 404 & loading animations

---

## 📱 Responsiveness

The website is fully responsive and works across:

- Mobile Devices 📱  
- Tablets 💻  
- Desktop Monitors 🖥️  

---

## ❌ 404 Not Found Page

A custom 404 page with Lottie background and redirect option.

---

## 💡 Extra Challenges Implemented

- 🔄 Theme toggle (Light/Dark mode)
- ✅ Custom toast and SweetAlert feedback
- ✅ Avoided use of Lorem Ipsum and default browser alerts

---

## 📝 Environment Variables

Firebase and MongoDB sensitive keys are stored securely in `.env.local`.

---

## 🔒 Protected Routes

Pages like Create Group, Group Details, My Groups, and Update Group are protected and redirect unauthorized users.

---

Feel free to explore the platform and connect through hobbies with **HobbyHub**! 🚀
