// Example JavaScript to simulate order history and user data

// Example user data
const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
};

// Example order history data
const orderHistory = [
    { orderId: "ORD001", date: "2025-03-01", status: "Shipped", total: 100.00 },
    { orderId: "ORD002", date: "2025-02-15", status: "Delivered", total: 150.00 },
    { orderId: "ORD003", date: "2025-01-30", status: "Processing", total: 80.00 }
];

// Function to load user data and order history
function loadAccountData() {
    // Load user information
    document.getElementById("user-name").textContent = userData.name;
    document.getElementById("user-email").textContent = userData.email;
    document.getElementById("user-phone").textContent = userData.phone;

    // Load order history
    const orderTableBody = document.querySelector("#order-table tbody");
    orderHistory.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.orderId}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
            <td>$${order.total.toFixed(2)}</td>
        `;
        orderTableBody.appendChild(row);
    });
}

// Function to edit account details (for demonstration purposes)
function editAccount() {
    // Here you would normally redirect to a page to edit the account
    alert("Redirecting to account edit page...");
}

// Load account data when the page loads
window.onload = loadAccountData;
