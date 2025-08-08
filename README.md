# 🌟 HobbyHub – A Local Hobby Group Organizer

## 🔗 Live Website

👉 [Live Link](https://hobbyhub-app.web.app/)
👉 [Server Repository]([https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-Alireja-khan](https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-Alireja-khan)

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
- **react-awesome-reveal** – for animations
- **react-simple-typewriter** – for banner text effect
- **react-hot-toast** – for error/success messages
- **sweetalert2** – for action confirmations
- **lottie-react** – for 404 & loading animations
- **react-countup** – for count animations
- **react-simple-typewriter** – for type animations
- **react-icons/go** – for icons

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

## 📝 Environment Variables

Firebase and MongoDB sensitive keys are stored securely in `.env.local`.

---

## 🔒 Protected Routes

Pages like Create Group, Group Details, My Groups, and Update Group are protected and redirect unauthorized users.

---

Feel free to explore the platform and connect through hobbies with **HobbyHub**! 🚀

---

## 🛠 How to Run Locally
-- Clone the repository

- Copy
- Edit
- git clone https://github.com/your-username/hobbyhub.git
- cd hobbyhub
- Install dependencies

- Copy
- Edit
- npm install
- Add environment variables
- Create .env.local file in the root:

- ini
- Copy
- Edit
- VITE_apiKey=your_firebase_api_key
- VITE_authDomain=your_firebase_auth_domain
- VITE_projectId=your_firebase_project_id
- VITE_storageBucket=your_firebase_storage_bucket
- VITE_messagingSenderId=your_firebase_sender_id
- VITE_appId=your_firebase_app_id
- VITE_SERVER_URL=your_backend_url
- Run the project

- Copy
- Edit
- npm run dev
- Open in browser
- Go to: http://localhost:5173

## 📬 Contact
- Developer: Md. Alireja Khan
- 📧 Email: ali2reja@.com
