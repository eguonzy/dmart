export function createRipple(event) {
  const { currentTarget } = event;
  const circle = document.createElement("span");
  const diameter = Math.max(
    currentTarget.clientWidth,
    currentTarget.clientHeight
  );
  const radius = diameter / 2;
  let { x, y } = currentTarget.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - x - radius}px`;
  circle.style.top = `${event.clientY - y - radius}px`;
  circle.classList.add("ripple");
  const ripple = currentTarget.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  currentTarget.appendChild(circle);
}
