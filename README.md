# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a responsive friendship management web application built with React. It helps users track interactions with friends (calls, texts, video chats) and visualize relationship activity through timelines and analytics.

---

## 🚀 Live Demo
https://classy-kitsune-22f21e.netlify.app/

- **GitHub Repository:** https://github.com/sultanafardhowsy/Keen-Keeper-app

---

## 📌 Project Description

KeenKeeper helps users:
- Track friends and their contact status
- Log interactions (Call / Text / Video)
- Monitor relationship health (On Track / Need Attention / Overdue)
- View interaction history in a timeline
- Analyze friendship activity using charts

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Tailwind CSS
- Daisyui
- Context API
- React Toastify
- Recharts
- JSON (mock API data)

---

## ✨ Key Features

### 🧑 Friends Management
- Display friends from JSON data
- Responsive 4-column grid layout
- Status-based UI (on-track, almost due, overdue)
- Clickable friend cards leading to detailed page

---

### 👤 Friend Details Page
- Full friend profile view
- Relationship stats (days since contact, goal, next due date)
- Quick actions: Call, Text, Video
- Logs interaction to timeline automatically
- Shows toast notifications on each action

---

### ⚡ Timeline System
- Tracks all interactions (Call / Text / Video)
- Displays date, icon, and title
- Filter timeline by interaction type
- Supports sorting (optional enhancement)

---

### 📊 Analytics Dashboard (Stats Page)
- Total Friends count
- On Track / Need Attention breakdown
- Monthly interaction tracking
- Pie chart visualization using Recharts

---

### 📱 Responsive Design
- Fully responsive for:
  - Mobile 📱
  - Tablet 📟
  - Desktop 💻

---

### 🔔 Notifications
- Toast alerts for:
  - Call
  - Text
  - Video interactions

---

### ❗ Additional Features
- Loading spinner while fetching data
- 404 Not Found page
- Refresh-safe routing (no reload errors)

---

⚙️ Setup Instructions
# Clone repo
git clone https://github.com/your-username/keenkepper.git

# Install dependencies
npm install

# Run project
npm run dev
🚀 Deployment

Deploy using:

Vercel
Netlify
Cloudflare Pages
