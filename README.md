#  Expense Tracker – Full Stack Web Application

A **full-stack Expense Tracker web application** built using **Node.js, Express, MongoDB, HTML, CSS, and JavaScript**.  
This application helps users **track daily expenses**, **visualize spending patterns**, and **manage finances efficiently**.

---
## Live Demo

### Frontend (Live):
👉 https://expense-tracker-dyp6.onrender.com

### Backend API (Live):
👉 https://expense-tracker-dyp6.onrender.com/api/expenses


##  Features

- Add daily expenses with title, amount, category, and date

- View all expenses stored in the database

- RESTful API for expense operations

- MongoDB Atlas cloud database integration

- Backend deployed on Render

- Fully responsive frontend 

---

##  Tech Stack

### Frontend
- HTML,CSS,JavaScript

### Backend
- Node.js  
- Express.js

### Database
- MongoDB Atlas(Cloud Database)

### Charts & Visualization
- Chart.js
### Deployment
- Render(Backend + Frontend)
---
### API Endpoints 
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/expenses`     | Fetch all expenses |
| POST   | `/api/expenses`     | Add a new expense  |
| DELETE | `/api/expenses/:id` | Delete an expense  |

## How to Run Locally
### Backend setup 
- cd backend 
- npm install
- Create the .env file inside the backend folder .
- MONGO_URI=your_mongodb_atlas_connection_string
  PORT=5000
- start the backend server :
- node server.is
- Backend will run at: http://localhost:5000

### Frontend Setup
- cd frontend
- open index.html using live server or in browser
### Environment Note 
- Update API base URL in frontend/script.js:
- const API_URL = "http://localhost:5000/api/expenses";
- For Production, this points to the deployed backend URL.
### Local API Test
- GET http://localhost:5000/api/expenses
### Security Note
- .env file is ignored using .gitignore
- Database credentials are not exposed

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
 IT Student|Full Stack Web Development  
 GitHub: https://github.com/msirisha129

