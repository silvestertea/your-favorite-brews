// Initialize EmailJS (only if needed for emails)
if (typeof emailjs !== 'undefined') {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
}

// Function to save user input to localStorage
function saveUserData() {
    const fields = ["clientName", "clientGender", "clientAddress", "clientEmail", "clientContact", "clientPayment"];
    
    fields.forEach(field => {
        const element = document.getElementById(field.replace('client', '').toLowerCase());
        if (element) {
            localStorage.setItem(field, element.value);
        }
    });
}

// Function to load user details on confirm.html
function loadUserData() {
    const fields = ["clientName", "clientGender", "clientAddress", "clientEmail", "clientContact", "clientPayment"];
    
    fields.forEach(field => {
        const element = document.getElementById(`summary-${field}`);
        if (element) {
            element.innerText = localStorage.getItem(field) || "Not provided";
        }
    });
}

// Function to handle adding items to cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Function to render cart items on order.html
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cartContainer.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach((item, index) => {
            let div = document.createElement("div");
            div.innerHTML = `<p>${item.name} - ${item.price} <img src="${item.image}" width="50"> <button onclick="removeItem(${index})">Remove</button></p>`;
            cartContainer.appendChild(div);
        });
    } else {
        cartContainer.innerHTML = "<p>No items in cart</p>";
    }
}

// Function to remove an item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Function to submit the order
function submitOrder(event) {
    event.preventDefault();
    saveUserData();
    window.location.href = "confirm.html";
}

// Function to confirm and clear order
function confirmOrder() {
    alert("Order confirmed! Thank you for your purchase.");
    localStorage.clear();
    window.location.href = "thankyou.html";
}

// Function to go back to order.html
function goBack() {
    window.location.href = "order.html";
}

// Function to cancel order
function cancelOrder() {
    alert("Order has been canceled.");
    localStorage.clear();
    window.location.href = "index.html";
}

// Attach event listeners when the page loads
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("order-form")) {
        document.getElementById("order-form").addEventListener("submit", submitOrder);
    }
    if (document.getElementById("summary-clientName")) {
        loadUserData();
    }
    renderCart();
});
(function() {
    emailjs.init("lmDKYHMPsrdev21wZ"); // Replace with your actual public key
})();

