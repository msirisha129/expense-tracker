# 💰 Expense Tracker – Full Stack Web Application

A **full-stack Expense Tracker web application** built using **Node.js, Express, MongoDB, HTML, CSS, and JavaScript**.  
This application helps users **track daily expenses**, **visualize spending patterns**, and **manage finances efficiently**.

---

## 🚀 Features

- ➕ Add daily expenses with category and amount  
- 📋 View all expenses in a scrollable list  
- 📊 Calculate:
  - Total Spent  
  - Today’s Spending  
  - Monthly Spending  
- 📈 Visual representation of expenses:
  - Category-wise progress bars  
  - Pie chart using Chart.js  
- 🌙 Dark Mode UI for better accessibility  
- 📱 Fully responsive (desktop & mobile friendly)  
- ⚠️ AI-based spending alerts *(basic logic implemented)*  

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- CSS3 (Dark Mode + Responsive Design)  
- JavaScript (Vanilla JS)

### Backend
- Node.js (server-side runtime)  
- Express.js (REST API framework)

### Database
- MongoDB (NoSQL database)  
- Mongoose (ODM)

### Charts & Visualization
- Chart.js

---

## 📂 Project Structure
EXPENSETRACKER/
│
├── backend/
│ ├── controllers/
│ │ └── expenseController.js
│ ├── models/
│ │ └── Expense.js
│ ├── routes/
│ │ └── expenseRoutes.js
│ ├── server.js
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md

---

## ⚙️ How It Works

- The **Node.js server** runs using **Express** and handles all API requests.
- Expenses are stored in **MongoDB**.
- The frontend fetches data from backend APIs using `fetch()`.
- **Chart.js** dynamically updates charts based on expense data.

---

## 📌 Future Improvements

- User authentication  
- Advanced AI spending predictions  
- Export expenses (CSV / PDF)  

---

## 👩‍💻 Author

**M Shirisha**  
Full Stack Web Development  

