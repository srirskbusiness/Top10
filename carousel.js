// Get the color and body selection elements
const colorSelect = document.getElementById('color');
const bodySelect = document.getElementById('body');

// Listen for changes in color and body selection
colorSelect.addEventListener('change', customizeCar);
bodySelect.addEventListener('change', customizeCar);

function customizeCar() {
    const selectedColor = colorSelect.value;
    const selectedBody = bodySelect.value;

    // Apply customization to the selected car (you'll need to define this logic)
    // For simplicity, let's assume there's only one car element, and you update its style
    const car = document.querySelector('.car');

    // Example: Apply the selected color and body type
    car.style.backgroundColor = selectedColor;
    car.style.border = `2px solid ${selectedColor}`;
    car.style.borderRadius = selectedBody === 'suv' ? '10px' : '5px';

    // You can implement more complex logic to apply the customization to different cars
}
