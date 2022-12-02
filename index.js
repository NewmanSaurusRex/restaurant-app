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

function getMenuItems() {
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
  })[0];
  order.push(orderObj);
  getTotal();
  renderOrder();
}

function handleRemove(removeIndex) {
  order.splice(removeIndex, 1);
  renderOrder();
}

function getOrderItems() {
  let orderHTML = ``;
  order.forEach(function (menu) {
    orderHTML += `
      <div class="order">
          <div class="cart-item">
            <h3 class="cart-item-title">${menu.name}</h3>
            <button class="remove-btn" data-remove=${order.indexOf(
              menu
            )}>Remove</button>
            <div>
              <h3>$${menu.price}</h3>
            </div>
          </div>
      </div>
    `;
  });
  return orderHTML;
}

function getTotal() {
  let totalHTML = ``;
  let totalPrice = 0;
  order.forEach(function (item) {
    totalPrice += item.price;
  });

  totalHTML = `
    <div class="total">
    <h2>Total:</h2>
    <h2>$${totalPrice}</h2>
    </div>`;

  return totalHTML;
}

function renderOrder() {
  document.getElementById("order").innerHTML = getOrderItems();
  document.getElementById("total").innerHTML = getTotal();
}

renderOrder();
