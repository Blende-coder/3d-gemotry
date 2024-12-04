const cartoonShape = document.querySelector('.cartoon-shape');
let isDragging = false;
let startX, startY;
let currentRotationX = 0;
let currentRotationY = 0;

// Handle mouse/touch start
function handlePointerDown(e) {
  isDragging = true;
  startX = e.clientX || e.touches[0].clientX;
  startY = e.clientY || e.touches[0].clientY;
}

// Handle mouse/touch move
function handlePointerMove(e) {
  if (!isDragging) return;

  const currentX = e.clientX || e.touches[0].clientX;
  const currentY = e.clientY || e.touches[0].clientY;

  // Calculate the rotation change
  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  // Update rotation angles
  currentRotationY += deltaX * 0.3; // Horizontal movement rotates around Y-axis
  currentRotationX -= deltaY * 0.3; // Vertical movement rotates around X-axis

  // Apply the rotation to the shape
  cartoonShape.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

  // Update starting point for next calculation
  startX = currentX;
  startY = currentY;
}

// Handle mouse/touch end
function handlePointerUp() {
  isDragging = false;
}

// Add event listeners for mouse and touch
cartoonShape.addEventListener('mousedown', handlePointerDown);
cartoonShape.addEventListener('mousemove', handlePointerMove);
cartoonShape.addEventListener('mouseup', handlePointerUp);
cartoonShape.addEventListener('mouseleave', handlePointerUp); // Stop dragging if mouse leaves

cartoonShape.addEventListener('touchstart', handlePointerDown);
cartoonShape.addEventListener('touchmove', handlePointerMove);
cartoonShape.addEventListener('touchend', handlePointerUp);
