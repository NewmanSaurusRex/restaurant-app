import { menuArray } from "./data.js";

const menuSection = document.getElementById("menu");
let order = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleOrder(e.target.dataset.add);
  }
});

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

function handleOrder(orderID) {
  const orderObj = menuArray.filter(function (item) {
    return item.id === orderID;
  });
  order.push(orderObj[0]);
  renderOrder();
}

function getOrderItems() {
  let orderHTML = ``;
  order.forEach(function (item) {
    orderHTML += `
      <div class="order">
        <h1>Your Order</h1>
          <div class="cart-item">
            <h3>${menu.name}</h3>
            <button class="remove-btn">Remove</button>
          </div>
          <div>
            <h3>${menu.price}</h3>
          </div>
          <div class="total">
            <h3>Total:</h3>
            <h3>${menu.price}</h3>
          </div>
        </div>
    `;
  });
  return orderHTML;
}

function renderOrder() {
  document.getElementById("order").innerHTML = getOrderItems();
}

renderOrder();
