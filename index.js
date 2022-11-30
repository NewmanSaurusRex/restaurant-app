import { menuArray } from "./data.js";

const menuSection = document.getElementById("menu");
const orderSection = document.getElementById("order");

let cart = [];
let total = 0;

function getMenuItems(items) {
  let menuHTML = ``;
  menuArray.forEach(function (item) {
    menuHTML += `<div class ="item">
      <div class="item-img">${item.emoji}</div>
      <div class="item-info">
        <h2 class="order-item-name">${item.name}</h2>
        <p class="item-description">${item.ingredients}</p>
        <p class="item-price">$${item.price}</p>
      </div>
        <div class="item-btn" data-add="${item.id}">+</div>
    </div>
    </div>`;
  });
  return menuHTML;
}

function render() {
  menuSection.innerHTML = getMenuItems();
}

render();

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    let item = findItemID(e.target.dataset.add);
    handleAddToCart(item);
  }
});

function findItemID(itemID) {
  let targetObj = menuArray.filter((item) => item.id == itemId)[0];
  return targetObj;
}

function handleAddToCart(item) {
  let cartHTML = `
    <div class="cart-item">
      <div class="cart-item-title">
        <span>${item.name}</span>
        <button class="remove-btn">Remove</button>
      </div>
      <div id="cart-item-price" class="price">
        <span>$${item.price}</span>
      </div>
    </div>
  })
  `;
  total += item.price;
  cart.push(cartHTML);
}

function renderCart() {
  orderSection.innerHTML = handleAddToCart();
}

renderCart();
