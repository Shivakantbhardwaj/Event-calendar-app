# 📅 Calendar App

A **MERN Stack Calendar Application** that allows users to create, view, and delete events in a **15-minute time slot**. It supports **real-time updates** using WebSockets and has a modern UI built with React Big Calendar.

## 🚀 Features

- **Create events** by selecting a time slot.
- **Popup form** to enter event name and time.
- **Fixed 15-minute event duration.**
- **Delete events** with a single click.
- **Multiple calendar views** (Day, Week, Month, etc.).
- **Navigation buttons** to move between days.
- **Real-time event synchronization** via WebSockets.
- **Responsive and user-friendly UI.**

## 🛠 Tech Stack

### **Frontend:**
- React.js
- React Big Calendar
- Tailwind CSS
- Axios
- Vercel Deployment

### **Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Socket.io
- CORS & dotenv
- Render Deployment

## 🖥️ Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
 git clone https://github.com/your-username/Calendar-app.git
 cd Calendar-app
```

### 2️⃣ **Set Up Frontend**
```sh
 cd calendar-app-frontend
 npm install
 npm start
```

### 3️⃣ **Set Up Backend**
```sh
 cd ../calendar-app-backend
 npm install
 node server.js
```

## ⚙️ Environment Variables
Create a **`.env`** file in both frontend and backend folders:

### Frontend (Vercel):
```sh
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (Render):
```sh
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## 🚀 Deployment
### **Frontend (Vercel)**
```sh
vercel
```

### **Backend (Render)**
Push the backend to GitHub and link it to **Render**.

## 🎯 Usage
- Click on a time slot to create an event.
- Enter the event name and select a time.
- Click "Add Event" to save it.
- Click on an event's ❌ icon to delete it.
- Use the "Next" and "Prev" buttons to navigate.

## 🛠 Future Enhancements
- **Google Calendar Integration**
- **Drag & Drop Event Rescheduling**
- **User Authentication & Profiles**

## 📜 License
This project is **open-source** under the **MIT License**.

## 🤝 Contributing
Pull requests are welcome! Feel free to improve the project.

### 🌟 **Star this repo if you like it!** ⭐

