// Your code here.
const items = document.querySelectorAll(".item");
const container = document.querySelector(".items");

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

items.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    activeItem = item;

    const itemRect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    offsetX = e.clientX - itemRect.left;
    offsetY = e.clientY - itemRect.top;

    item.style.position = "absolute";
    item.style.zIndex = "1000";

    item.style.left = itemRect.left - containerRect.left + "px";
    item.style.top = itemRect.top - containerRect.top + "px";
  });
});

document.addEventListener("mousemove", (e) => {
  if (!activeItem) return;

  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  const maxX = container.clientWidth - activeItem.offsetWidth;
  const maxY = container.clientHeight - activeItem.offsetHeight;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > maxX) x = maxX;
  if (y > maxY) y = maxY;

  activeItem.style.left = x + "px";
  activeItem.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
  activeItem = null;
});
