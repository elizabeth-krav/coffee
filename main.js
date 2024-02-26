const ITEMS = [
  {
    id: 1,
    name: "Coffee Latte",
    price: 15.99,
    image: "images/menu.jpg",
    qty: 1,
  },
  {
    id: 2,
    name: "Coffee Cappuccino",
    price: 15.99,
    image: "images/menu.jpg",
    qty: 1,
  },
  {
    id: 3,
    name: "Coffee Espresso",
    price: 15.99,
    image: "images/menu.jpg",
    qty: 1,
  },
  {
    id: 4,
    name: "Coffee Affogato",
    price: 15.99,
    image: "images/menu.jpg",
    qty: 1,
  },
  {
    id: 5,
    name: "Coffee Flat White",
    price: 15.99,
    image: "images/menu.jpg",
    qty: 1,
  },
  {
    id: 6,
    name: "Coffee Americano",
    price: 15.99,
    image: "images/menu.jpg",
    qty: 1,
  },
];

const openBtn = document.getElementById("open-cart-btn");
const cart = document.getElementById("side-cart");
const closeBtn = document.getElementById("close-btn");
const backdrop = document.querySelector(".backdrop");
const itemsE1 = document.querySelector(".menu");
const cartItems = document.querySelector(".cart-items");

const cart_data = [];

openBtn.addEventListener("click", openCart);
closeBtn.addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);

renderItems();
renderCartItems();

//Open Cart
function openCart() {
  cart.classList.add("open");
  backdrop.style.display = "block";

  setTimeout(() => {
    backdrop.classList.add("show");
  }, 0);
}

//Close Cart
function closeCart() {
  cart.classList.remove("open");
  backdrop.classList.remove("show");

  setTimeout(() => {
    backdrop.style.display = "none";
  }, 500);
}

//Add items to Cart
function addItem(idx) {
  cart_data.push(ITEMS[idx]);
  updateCart();
  openCart();
}

//Render Items
function renderItems() {
  const boxContainer = document.createElement("div"); // Create a container for all the items
  boxContainer.classList.add("box-container"); // Add the class "box-container" to the container

  ITEMS.forEach((box, idx) => {
    const itemE1 = document.createElement("div");
    itemE1.classList.add("box");
    itemE1.onclick = () => addItem(idx);
    itemE1.innerHTML = `
        <img src="${box.image}" alt="Latte" />
          <h3>${box.name}</h3>
          <div class="price">&dollar;${box.price}<span>&dollar;20.99</span></div>
          <button class="btn">Add to cart</button>
        `;
    boxContainer.appendChild(itemE1); // Append each item's div to the container
  });

  itemsE1.appendChild(boxContainer); // Append the container to the itemsE1 element
}

//Display / Render Cart Items
function renderCartItems() {
  cart_data.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
    
                <div class="remove-item">
                  <span>&times;</span>
                </div>
                <div class="item-img">
                  <img src="${item.image}" alt="Latte" />
                </div>
                <div class="item-details">
                  <p>${item.name}</p>
                  <strong>$${item.price}</strong>
                  <div class="qty">
                    <span>-</span>
                    <strong>${item.qty}</strong>
                    <span>+</span>
                  </div>
                </div>`;

    cartItems.appendChild(cartItem);
  });
}

function updateCart() {
  //rendere cart items with update data
  renderCartItems();
}
