const API_URL = "/api/expenses";


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Today's date
    const dateInput = document.getElementById("expenseDate");

    const today = new Date().toISOString().split("T")[0];

    dateInput.value = today;


    // Load expenses
    loadExpenses();


    // Form submit
    document
        .getElementById("expenseForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            addExpense();

        });


    // Refresh button
    document
        .getElementById("refreshBtn")
        .addEventListener("click", function () {

            loadExpenses();

        });

});


// ===============================
// GET ALL EXPENSES
// ===============================

async function loadExpenses() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {

            throw new Error("Failed to fetch expenses");

        }

        const expenses = await response.json();

        displayExpenses(expenses);

        updateDashboard(expenses);

    } catch (error) {

        console.error("Error:", error);

        alert("Unable to load expenses.");

    }

}


// ===============================
// ADD EXPENSE
// ===============================

async function addExpense() {

    const title =
        document.getElementById("title").value;

    const amount =
        document.getElementById("amount").value;

    const category =
        document.getElementById("category").value;

    const description =
        document.getElementById("description").value;

    const expenseDate =
        document.getElementById("expenseDate").value;


    const expense = {

        title: title,

        amount: Number(amount),

        category: category,

        description: description,

        expenseDate: expenseDate

    };


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(expense)

        });


        if (!response.ok) {

            throw new Error("Failed to add expense");

        }


        const savedExpense = await response.json();

        console.log("Saved:", savedExpense);


        alert("Expense added successfully!");


        // Clear form
        document
            .getElementById("expenseForm")
            .reset();


        // Set today's date again
        document
            .getElementById("expenseDate")
            .value =
            new Date().toISOString().split("T")[0];


        // Reload expenses
        loadExpenses();


    } catch (error) {

        console.error("Error:", error);

        alert("Failed to add expense.");

    }

}


// ===============================
// DISPLAY EXPENSES
// ===============================

function displayExpenses(expenses) {

    const tableBody =
        document.getElementById("expenseTableBody");


    tableBody.innerHTML = "";


    if (expenses.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    No expenses found
                </td>
            </tr>
        `;

        return;

    }


    expenses.forEach(function (expense) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${expense.title}</td>

            <td>₹${expense.amount}</td>

            <td>${expense.category}</td>

            <td>${expense.description || "-"}</td>

            <td>${expense.expenseDate || "-"}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editExpense(${expense.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteExpense(${expense.id})">
                    Delete
                </button>

            </td>

        `;


        tableBody.appendChild(row);

    });

}


// ===============================
// UPDATE DASHBOARD
// ===============================

function updateDashboard(expenses) {

    let total = 0;


    expenses.forEach(function (expense) {

        total += Number(expense.amount);

    });


    document
        .getElementById("totalExpense")
        .innerText =
        "₹" + total;


    document
        .getElementById("totalTransactions")
        .innerText =
        expenses.length;

}


// ===============================
// EDIT EXPENSE
// ===============================

async function editExpense(id) {

    try {

        // Get expense by ID
        const response =
            await fetch(`${API_URL}/${id}`);


        if (!response.ok) {

            throw new Error("Expense not found");

        }


        const expense =
            await response.json();


        // Fill form
        document.getElementById("title").value =
            expense.title;

        document.getElementById("amount").value =
            expense.amount;

        document.getElementById("category").value =
            expense.category;

        document.getElementById("description").value =
            expense.description;

        document.getElementById("expenseDate").value =
            expense.expenseDate;


        // Change button
        const button =
            document.getElementById("addExpenseBtn");


        button.innerText =
            "Update Expense";


        // Remove old click handler
        button.onclick = async function () {

            await updateExpense(id);

        };


        // Form submit ko temporarily stop karne ke liye
        document
            .getElementById("expenseForm")
            .onsubmit = function (event) {

                event.preventDefault();

            };


    } catch (error) {

        console.error("Error:", error);

        alert("Unable to find expense.");

    }

}


// ===============================
// UPDATE EXPENSE
// ===============================

async function updateExpense(id) {

    const updatedExpense = {

        title:
            document.getElementById("title").value,

        amount:
            Number(
                document.getElementById("amount").value
            ),

        category:
            document.getElementById("category").value,

        description:
            document.getElementById("description").value,

        expenseDate:
            document.getElementById("expenseDate").value

    };


    try {

        const response =
            await fetch(`${API_URL}/${id}`, {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body:
                    JSON.stringify(updatedExpense)

            });


        if (!response.ok) {

            throw new Error("Failed to update expense");

        }


        alert("Expense updated successfully!");


        resetForm();

        loadExpenses();


    } catch (error) {

        console.error("Error:", error);

        alert("Failed to update expense.");

    }

}


// ===============================
// DELETE EXPENSE
// ===============================

async function deleteExpense(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this expense?");


    if (!confirmDelete) {

        return;

    }


    try {

        const response =
            await fetch(`${API_URL}/${id}`, {

                method: "DELETE"

            });


        if (!response.ok) {

            throw new Error("Failed to delete expense");

        }


        alert("Expense deleted successfully!");


        loadExpenses();


    } catch (error) {

        console.error("Error:", error);

        alert("Failed to delete expense.");

    }

}


// ===============================
// RESET FORM
// ===============================

function resetForm() {

    document
        .getElementById("expenseForm")
        .reset();


    document
        .getElementById("expenseDate")
        .value =
        new Date().toISOString().split("T")[0];


    const button =
        document.getElementById("addExpenseBtn");


    button.innerText =
        "Add Expense";


    button.onclick = null;


    document
        .getElementById("expenseForm")
        .onsubmit = function (event) {

            event.preventDefault();

            addExpense();

        };

}