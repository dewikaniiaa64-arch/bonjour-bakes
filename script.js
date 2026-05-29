
let cart = JSON.parse(localStorage.getItem('bonjour_cart')) || [];


function addToCart(name, price) {
    
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ name: name, price: price, qty: 1 });
    }

    
    saveCart();
    
    
    alert(`${name} added to cart!`);
}


function saveCart() {
    localStorage.setItem('bonjour_cart', JSON.stringify(cart));
}


function processOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items first.");
        return;
    }

    let totalPrice = 0;
    let message = "Hello Bonjour Bakes, I would like to order:%0A";
    
    
    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        message += `- ${item.name} (x${item.qty}): Rp ${itemTotal.toLocaleString('id-ID')}%0A`;
        totalPrice += itemTotal;
    });

    message += `%0ATotal: Rp ${totalPrice.toLocaleString('id-ID')}`;

    
    const phoneNumber = "+6285222483712"; 
    
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}