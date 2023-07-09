
// const container = document.querySelector(".exp-list");
const container = document.querySelector(".exp-list");



const wrapper = document.querySelector(".wrapper");
const ITEMS_NUMBER = container.children.length;

const ITEM_WIDTH = container.children[0].offsetWidth;
let step = 1;


window.onload = function () {

   moveItems();
}

function moveItems() {
   container.addEventListener("transitionend", onTransitionEnd);
   container.style.left = -step * ITEM_WIDTH + "px";
}

function onTransitionEnd() {
   container.removeEventListener("transitionend", onTransitionEnd);
   container.children[(step - 1) % ITEMS_NUMBER].style.order = step;
   wrapper.style.left = step * ITEM_WIDTH + "px";
   step++;
   moveItems();
}


