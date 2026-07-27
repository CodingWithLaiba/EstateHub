# 🏠 EstateHub

EstateHub is a full-stack real estate listing platform where users can sign up, sign in (including Google Sign-In), create property listings with images, and browse/search listings created by others.

Built with the **MERN stack** (MongoDB, Express, React, Node.js), using **Redux Toolkit** for state management, **Firebase Authentication** for Google Sign-In, and **Cloudinary** for image hosting.

---

## ✨ Features

- 🔐 **Authentication**
  - Email/password sign up & sign in
  - Google Sign-In via Firebase Authentication
  - Passwords hashed with bcrypt
  - JWT-based sessions stored in httpOnly cookies
- 🖼️ **Image Uploads**
  - Property images and profile avatars uploaded via Cloudinary
  - Upload progress indicator
- 🏘️ **Listings**
  - Create, update, and delete property listings
  - Support for rent/sale, offers, discount pricing, amenities (parking, furnished, etc.)
  - Multiple images per listing
- 👤 **User Profile**
  - Update username, email, password, and avatar
  - Delete account
  - View and manage your own listings
- 🔍 **Search & Browse**
  - Search and filter listings

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit + redux-persist
- React Router
- Tailwind CSS
- Firebase Authentication (Google Sign-In)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Cloudinary (image storage)

---

## 📁 Project Structure

```
EstateHub/
├── api/
│   ├── controllers/       # Route logic (auth, user, listing)
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express routers
│   ├── utlis/             # Helper functions (error handler, JWT verification)
│   └── index.js           # Express app entry point
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route-level pages
│   │   ├── redux/         # Redux store & slices
│   │   ├── utlis/         # Frontend helpers (Cloudinary upload)
│   │   ├── firebase.js    # Firebase config
│   │   └── App.jsx
│   └── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- A MongoDB Atlas cluster
- A Firebase project (for Google Sign-In)
- A Cloudinary account (for image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/CodingWithLaiba/EstateHub.git
cd EstateHub
```

### 2. Install dependencies

```bash
npm install
npm install --prefix client
```

### 3. Set up environment variables

Create a `.env` file in the **project root**:

```env
MONGO_DB=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Create a `.env` file inside the **client** folder:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

### 4. Run the app in development

Backend:
```bash
npm run dev
```

Frontend (in a separate terminal):
```bash
cd client
npm run dev
```

The frontend dev server proxies API requests to the backend, so visit the Vite dev URL (usually `http://localhost:5173`) in your browser.

---

## 🌐 Deployment

This project is configured to deploy as a **single service**, with Express serving both the API and the built React frontend from one domain.

1. Build the frontend as part of the deployment build step
2. Set all environment variables (backend + `VITE_` prefixed frontend vars) in your hosting platform's dashboard
3. Add your deployed domain to **Firebase Console → Authentication → Authorized domains** so Google Sign-In works in production
