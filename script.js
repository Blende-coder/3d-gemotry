// Get the elements for cube and color input section
const cube = document.getElementById('cube');
const colorCodeInput = document.getElementById('colorCode');
const colorSection = document.getElementById('color-section');
const toggleColorSection = document.getElementById('toggleColorSection');
const resetColorButton = document.getElementById('resetColor');
const closeSectionButton = document.getElementById('closeSection');

// Variables to track mouse position
let mouseX = 0;
let mouseY = 0;

// Mouse move event listener for cube rotation
window.addEventListener('mousemove', (event) => {
    // Calculate the mouse position relative to the center of the screen
    mouseX = (event.clientX / window.innerWidth) * 360;
    mouseY = (event.clientY / window.innerHeight) * 360;
  
    // Reverse the mouseX value to invert the rotation direction
    mouseX = -mouseX;
  
    // Apply rotation to the cube based on the reversed mouseX value
    cube.style.transform = `rotateX(${-mouseY}deg) rotateY(${mouseX}deg)`;
  });

// Toggle the visibility of the color input section when clicked
toggleColorSection.addEventListener('click', () => {
    if (colorSection.style.display === 'none' || colorSection.style.display === '') {
        colorSection.style.display = 'block';
    } else {
        colorSection.style.display = 'none';
    }
});

// Function to change the color of the cube faces
colorCodeInput.addEventListener('input', (event) => {
    const color = event.target.value;

    // Validate if the input is a valid hex color
    const hexRegex = /^#[0-9A-Fa-f]{6}$/;
    if (hexRegex.test(color)) {
        // Change color of each cube face
        document.querySelector('.front').style.backgroundColor = color;
        document.querySelector('.back').style.backgroundColor = color;
        document.querySelector('.left').style.backgroundColor = color;
        document.querySelector('.right').style.backgroundColor = color;
        document.querySelector('.top').style.backgroundColor = color;
        document.querySelector('.bottom').style.backgroundColor = color;
    } else {
        console.log('Invalid hex code');
    }
});

// Reset color to default
resetColorButton.addEventListener('click', () => {
    const defaultColor = '#ff5733'; // Default color for the cube
    document.querySelector('.front').style.backgroundColor = defaultColor;
    document.querySelector('.back').style.backgroundColor = defaultColor;
    document.querySelector('.left').style.backgroundColor = defaultColor;
    document.querySelector('.right').style.backgroundColor = defaultColor;
    document.querySelector('.top').style.backgroundColor = defaultColor;
    document.querySelector('.bottom').style.backgroundColor = defaultColor;

    // Reset input field
    colorCodeInput.value = '';
});

// Close the color input section
closeSectionButton.addEventListener('click', () => {
    colorSection.style.display = 'none';
});
