import { menuArray } from "./data.js";

const menuSection = document.getElementById("menu");

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
