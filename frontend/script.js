const API_URL = "https://expense-tracker-backend-8cy0.onrender.com/api/expenses";

const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");
const dateFilter = document.getElementById("date-filter");

const totalExpenseEl = document.getElementById("total-expense");
const todayTotalEl = document.getElementById("today-expense");
const monthTotalEl = document.getElementById("month-expense");
const categoryBarsEl = document.getElementById("category-bars");

let expenseChart;
function getCategoryIcon(category) {
  const icons = {
    Food: "🍔",
    Transport: "🚌",
    Shopping: "🛍️",
    Bills: "💡",
    Entertainment: "🎬",
    Health: "🩺",
    Education: "📚",
    Other: "💳",
  };
  return icons[category] || "💰";
}
// ================= CATEGORY BARS =================
function renderCategoryBars(categoryTotals) {
  categoryBarsEl.innerHTML = "";

  const maxAmount = Math.max(...Object.values(categoryTotals));

  Object.entries(categoryTotals).forEach(([category, amount]) => {
    const percent = (amount / maxAmount) * 100;

    const bar = document.createElement("div");
    bar.className = "category-bar";

    bar.innerHTML = `
      <div class="category-row">
        <span>${category}</span>
        <span>₹${amount}</span>
      </div>
      <div class="bar-bg">
        <div class="bar-fill" style="width:${percent}%"></div>
      </div>
    `;

    categoryBarsEl.appendChild(bar);
  });
}

// ================= FETCH EXPENSES =================
async function fetchExpenses() {
  const res = await fetch(API_URL);
  const result = await res.json();

  expenseList.innerHTML = "";

  let total = 0;
  let todayTotal = 0;
  let monthTotal = 0;
  let categoryTotals = {};

  const today = new Date();
  const todayStr = today.toDateString();

  result.data.forEach((expense) => {
    const amount = Number(expense.amount);
    const date = new Date(expense.date);

    total += amount;

    if (date.toDateString() === todayStr) todayTotal += amount;
    if (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) monthTotal += amount;

    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) + amount;

    const li = document.createElement("li");
    li.className = "expense-item";

    li.innerHTML = `
      <div>
       <strong>${getCategoryIcon(expense.category)} ${expense.title}</strong>
       <div class="category">${expense.category}</div>
 
      </div>
      <span class="amount">- ₹${amount}</span>
    `;

    expenseList.appendChild(li);
  });

  totalExpenseEl.textContent = `₹${total}`;
  todayTotalEl.textContent = `₹${todayTotal}`;
  monthTotalEl.textContent = `₹${monthTotal}`;

  renderCategoryBars(categoryTotals);
  drawChart(categoryTotals);
  spendingAlerts(total, todayTotal, categoryTotals);

}
// ================= AI SPENDING ALERTS =================
function spendingAlerts(total, todayTotal, categoryTotals) {

  // 1️⃣ High total spending alert
  if (total > 10000) {
    alert("⚠️ High Spending Alert: Your total expenses crossed ₹10,000");
  }

  // 2️⃣ Category dominance alert
  for (let category in categoryTotals) {
    if (categoryTotals[category] > total * 0.5) {
      alert(`📊 Alert: ${category} takes more than 50% of your spending`);
    }
  }

  // 3️⃣ Daily spike alert
  if (todayTotal > total * 0.3) {
    alert("🚨 Alert: Unusual high spending today!");
  }
}

// ================= PIE CHART =================
function drawChart(categoryTotals) {
  const ctx = document.getElementById("expenseChart");

  if (expenseChart) expenseChart.destroy();

  expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(categoryTotals),
      datasets: [{
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#9C27B0",
          "#FF5722",
          "#00BCD4",
        ],
      }],
    },
    options: {
      plugins: { legend: { position: "bottom" } },
    },
  });
}

// ================= ADD EXPENSE =================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleInput.value,
      amount: Number(amountInput.value),
      category: categoryInput.value,
    }),
  });

  form.reset();
  fetchExpenses();
});
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ================= FILTER =================
dateFilter.addEventListener("change", fetchExpenses);

// ================= LOAD =================
fetchExpenses();
