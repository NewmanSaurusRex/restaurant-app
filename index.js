import { menuArray } from "./data.js";

const menuSection = document.getElementById("menu");
let order = [];

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleOrder(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    handleRemove(e.target.dataset.remove);
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
    return item.id == orderID;
  });
  order.push(orderObj[0]);
  renderOrder();
}

function getOrderItems() {
  let orderHTML = ``;
  order.forEach(function (menu) {
    orderHTML += `
      <div class="order">
        <h1 class="order-title">Your Order</h1>
          <div class="cart-item">
            <h3 class="cart-item-title">${menu.name}</h3>
            <button class="remove-btn" data-remove=${menu.id}>Remove</button>
            <div>
              <h3>$${menu.price}</h3>
            </div>
            <div class="total">
              <h3 id="total-price">Total:</h3>
            </div>
          </div>
          <h3 id="end-price">$${menu.price}</h3>
      </div>
    `;
  });
  return orderHTML;
}

function renderOrder() {
  document.getElementById("order").innerHTML = getOrderItems();
}

renderOrder();

function handleRemove() {
  console.log("remove item");
}
