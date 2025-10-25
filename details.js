const params = new URLSearchParams(window.location.search);

const product = {
  id: params.get('id') || Date.now().toString(), 
  name: params.get('name'),
  description: params.get('description'),
  price: params.get('price'),
  image: params.get('image')
};

document.getElementById('product-name').textContent = product.name;
document.getElementById('product-description').textContent = product.description;
document.getElementById('product-price').textContent = product.price;
document.getElementById('product-image').src = product.image;

const addToCartBtn = document.getElementById("addToCart");
const cartCount = document.querySelector(".cart-count");


let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;


addToCartBtn.addEventListener("click", () => {
  const quantityInput = document.getElementById("quantity");
  const quantity = parseInt(quantityInput.value) || 1;


  const existingItem = cart.find(item => item.id === product.id);


  if (existingItem) {
    existingItem.quantity += quantity; 
  } else {
    cart.push({ ...product, quantity }); 
  }


  localStorage.setItem("cart", JSON.stringify(cart));


  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  alert(`${product.name} (${quantity}) added to your bag 🛍️`);
});
