📊 Expense Tracker Web Application
A full-stack Expense Tracker web application built using Node.js, Express, MongoDB, HTML, CSS, and JavaScript.
This application helps users track daily expenses, visualize spending patterns, and manage finances efficiently.

🚀 Features
➕ Add daily expenses with category and amount
📋 View all expenses in a scrollable list
🧮 Calculate:
Total Spent
Today’s Spending
Monthly Spending
📊 Visual representation of expenses using:
Category-wise progress bars
Pie chart (Chart.js)
🌙 Dark Mode UI for better accessibility
📱 Fully responsive (desktop & mobile friendly)
⚠️ AI-based spending alerts (basic logic implemented)
🛠️ Tech Stack

Frontend
HTML5
CSS3 (Dark Mode + Responsive Design)
JavaScript (Vanilla JS)

Backend
Node.js (server-side runtime)
Express.js (REST API framework)

Database
MongoDB (NoSQL database)
Mongoose (ODM)

Charts & Visualization
Chart.js

🗂️ Project Structure
EXPENSETRACKER/
│
├── backend/
│   ├── controllers/
│   │   └── expenseController.js
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── README.md
⚙️ How It Works
The Node.js server runs using Express and handles all API requests.
Expenses are stored in MongoDB.
Frontend fetches data from backend APIs using fetch().
Chart.js dynamically updates charts based on expense data.

▶️ How to Run the Project

1️⃣ Backend Setup
cd backend
npm install
node server.js

2️⃣ Frontend Setup
Open frontend/index.html using Live Server
OR directly open in browser

📌 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Fetch all expenses
POST	/api/expenses	Add a new expense
DELETE	/api/expenses/:id	Delete an expense


✨ Future Enhancements
User authentication
Export expenses to CSV/PDF
Advanced AI spending predictions
Cloud deployment (Render / Vercel)

👩‍💻 Author
 M Shirisha
IT Student | Full Stack Web Development
GitHub: https://github.com/msirisha129
