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

  // Add a grabbing cursor for better UX
  cartoonShape.style.cursor = 'grabbing';

  // Add global listeners for smooth dragging
  window.addEventListener('mousemove', handlePointerMove);
  window.addEventListener('touchmove', handlePointerMove);
  window.addEventListener('mouseup', handlePointerUp);
  window.addEventListener('touchend', handlePointerUp);
}

// Handle mouse/touch move
function handlePointerMove(e) {
  if (!isDragging) return;

  const currentX = e.clientX || e.touches[0].clientX;
  const currentY = e.clientY || e.touches[0].clientY;

  // Calculate the rotation change based on cursor movement
  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  // Update rotation angles
  currentRotationY += deltaX * 0.3; // Horizontal movement rotates around Y-axis
  currentRotationX -= deltaY * 0.3; // Vertical movement rotates around X-axis

  // Apply the rotation to the shape
  cartoonShape.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

  // Update starting point for the next calculation
  startX = currentX;
  startY = currentY;
}

// Handle mouse/touch end
function handlePointerUp() {
  isDragging = false;

  // Restore the default cursor
  cartoonShape.style.cursor = 'grab';

  // Remove global listeners when dragging stops
  window.removeEventListener('mousemove', handlePointerMove);
  window.removeEventListener('touchmove', handlePointerMove);
  window.removeEventListener('mouseup', handlePointerUp);
  window.removeEventListener('touchend', handlePointerUp);
}

// Add event listeners for mouse and touch on the shape
cartoonShape.addEventListener('mousedown', handlePointerDown);
cartoonShape.addEventListener('touchstart', handlePointerDown);
