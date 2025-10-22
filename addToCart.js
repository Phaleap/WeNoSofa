const cartContainer = document.getElementById("cart-container");
const totalDisplay = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";
  totalDisplay.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your bag is empty 😢</p>";
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");


    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="info">
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <div class="quantity-box">
          <button class="decrease" data-index="${index}">−</button>
          <span>${item.quantity}</span>
          <button class="increase" data-index="${index}">+</button>
        </div>
      </div>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    cartContainer.appendChild(itemDiv);

    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    total += priceNum * item.quantity;
  });


  const totalText = document.createElement("h3");
  totalText.textContent = "Total: $" + total.toFixed(2);
  totalDisplay.appendChild(totalText);


  const buyBtn = document.createElement("button");
  buyBtn.textContent = "Buy Now 🛒";
  buyBtn.classList.add("buy-btn");
  totalDisplay.appendChild(buyBtn);


  buyBtn.addEventListener("click", () => {
    alert("Thank you for your purchase! 🥳");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  });


  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });


  document.querySelectorAll(".increase").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      cart[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  document.querySelectorAll(".decrease").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

renderCart();
