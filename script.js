<script>
const slider = document.querySelector(".items");

let isDragging = false;
let startX = 0;
let startScroll = 0;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  startScroll = slider.scrollLeft;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const walk = e.pageX - startX;
  slider.scrollLeft = startScroll - walk;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
});
</script>