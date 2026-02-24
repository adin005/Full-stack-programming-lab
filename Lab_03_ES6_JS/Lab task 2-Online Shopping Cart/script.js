let cart = [];

function addToCart(...items) {
    cart.push(...items);
}

addToCart("Laptop", "Mouse", "Keyboard", "Headphones");

const clonedCart = [...cart];

const [firstItem, ...remainingItems] = clonedCart;

document.getElementById("cart").innerHTML = `
    <div class="cart-box">
        <p><strong>Total Items:</strong> ${clonedCart.length}</p>
        <p><strong>First Item:</strong> ${firstItem}</p>
        <p><strong>Remaining Items:</strong> ${remainingItems.join(", ")}</p>
        <p><strong>Updated Cart:</strong> ${clonedCart.join(", ")}</p>
    </div>
`;