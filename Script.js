// Adding to Cart
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} has been added to your cart!`);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    if (!cartItemsDiv) return;  // If cart is not loaded, return

    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<div class="cart-item"><p>${item.product} - $${item.price}</p></div>`;
        total += item.price;
    });
    cartItemsDiv.innerHTML += `<h3>Total: $${total}</h3>`;
}

// Contact form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    alert(`Thank you ${name}! Your message has been received. We will respond to ${email} soon.`);
    document.getElementById("contact-form").reset();
});
