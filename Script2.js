// Function to filter products based on selected category
function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Function to sort products based on price
function sortProducts() {
    const sortType = document.getElementById('sortFilter').value;
    const productList = document.querySelector('.product-list');
    const products = Array.from(productList.getElementsByClassName('product-card'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p').innerText.replace('$', ''));
        const priceB = parseFloat(b.querySelector('p').innerText.replace('$', ''));
        
        if (sortType === 'price-low-high') {
            return priceA - priceB;
        } else if (sortType === 'price-high-low') {
            return priceB - priceA;
        } else {
            return 0; // Default sorting
        }
    });

    // Re-arrange products in DOM
    products.forEach(product => productList.appendChild(product));
}

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

        // Save cart count to localStorage
        localStorage.setItem('cartCount', cart.length);

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
};
