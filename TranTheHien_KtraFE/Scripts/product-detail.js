let productPrice = 0;

document.addEventListener("DOMContentLoaded", function () {
    let priceElement = document.getElementById("main-price");
    if (priceElement) {
        productPrice = parseFloat(priceElement.getAttribute("data-price"));
    }
});

function changeQuantity(amount) {
    let input = document.getElementById("txtQuantity");
    let currentQty = parseInt(input.value);
    let newQty = currentQty + amount;

    if (newQty >= 1) {
        input.value = newQty;
        calculateTotal(); 
    }
}

function calculateTotal() {
    let quantity = parseInt(document.getElementById("txtQuantity").value);

    let subTotal = quantity * productPrice;

    let displayPrice = subTotal.toLocaleString('vi-VN') + "₫";
    document.getElementById("subtotal-display").innerText = displayPrice;
}