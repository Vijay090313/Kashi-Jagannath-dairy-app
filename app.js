console.log("🚀 KJ DAIRY APP: ENGINE STARTED");

const prices = {
    cow: 3000,
    buffalo: 1600
};

function changeQty(productId, change) {
    const qtyElement = document.getElementById('qty-' + productId);
    const priceElement = document.getElementById('price-' + productId);
    let currentQty = parseInt(qtyElement.innerText);
    
    if (currentQty + change >= 1) {
        currentQty += change;
        qtyElement.innerText = currentQty;
        // Update the total price display
        const total = prices[productId] * currentQty;
        priceElement.innerText = "₹" + total + " / " + currentQty + "L";
    }
}

function sendOrder(name) {
    const id = (name === 'Cow Ghee') ? 'cow' : 'buffalo';
    const qty = document.getElementById('qty-' + id).innerText;
    const total = prices[id] * parseInt(qty);
    
    const message = `*KJ DAIRY - NEW ORDER*%0A` +
                    `--------------------------%0A` +
                    `*Item:* ${name}%0A` +
                    `*Qty:* ${qty}L%0A` +
                    `*Total:* ₹${total}%0A` +
                    `--------------------------%0A` +
                    `🙏 Please share your location for delivery!`;

    // Replace 917888912401 with your actual number
    window.location.href = "https://wa.me/917888912401?text=" + message;
}
