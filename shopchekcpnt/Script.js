

let cartItems= {
    product1: { quantity: 0, price: 20, liked: false },
    product2: { quantity: 0, price: 30, liked: false },
    product3: { quantity: 0, price: 40, liked: false }
};

function adjustQuantity(itemId, amount) {
    const item = cartItems[itemId];
    if (item) {
        item.quantity += amount;
        if (item.quantity < 0) item.quantity = 0;
        updateItemDisplay(itemId);
        updateTotal();
    }
}

function updateItemDisplay(itemId) {
    const item = cartItems[itemId];
    if (item) {
        document.getElementById(`${itemId}-quantity`).innerText = item.quantity;
    }
}

function updateTotal() {
    let total = 0;
    for (const itemId in cartItems) {
        total += cartItems[itemId].quantity * cartItems[itemId].price;
    }
    document.getElementById('total').innerText = `Total: $${total}`;
}

function removeItem(itemId) {
    delete cartItems[itemId];
    document.getElementById(itemId).remove();
    updateTotal();
}
