
const cartoonShape = document.querySelector('.cartoon-shape');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

cartoonShape.addEventListener('click', () => {
  const faces = document.querySelectorAll('.face');
  faces.forEach(face => {
    face.style.background = `linear-gradient(to bottom, ${getRandomColor()}, ${getRandomColor()})`;
  });
});
