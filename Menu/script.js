
// script.js
// This script can be used to dynamically fetch plant data from a database and populate the menu page.

// Example of populating plant data dynamically:
const container = document.querySelector('.container');

plants.forEach(plant => {
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');
    plantCard.innerHTML = `
        <img src="path/to/${plant.name.toLowerCase()}.jpg" alt="${plant.name}">
        <h2>${plant.name}</h2>
        <p>Category: ${plant.category}</p>
        <p>Price: ₹${plant.price}</p>
    `;
    container.appendChild(plantCard);
});
