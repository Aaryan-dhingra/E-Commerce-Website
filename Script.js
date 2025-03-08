// Adding items to the cart
const cart = [];

// Add to Cart button event listener
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-product');
        const productPrice = e.target.getAttribute('data-price');
        
        // Add product to cart
        cart.push({ name: productName, price: productPrice });

        // Update cart count on the page
        document.getElementById('cart-count').innerText = cart.length;

        // Show a confirmation message
        alert(`${productName} has been added to your cart!`);
    });
});

// Updating the cart count when the page loads
window.onload = function() {
    const cartCount = localStorage.getItem('cartCount');
    if (cartCount) {
        document.getElementById('cart-count').innerText = cartCount;
    }
}

// Save the cart count to localStorage when items are added
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const currentCartCount = document.getElementById('cart-count').innerText;
        localStorage.setItem('cartCount', currentCartCount);
    });
});
