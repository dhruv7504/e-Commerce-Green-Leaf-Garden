
// Simulated user data
const userData = {
    username: "PlantLover123",
    email: "plantlover123@example.com",
    location: "New York, USA"
  };
  
  // Simulated plant data
  const plantsData = [
    { name: "Peace Lily", image: "peace_lily.jpg", description: "Beautiful indoor plant with lush green leaves." },
    { name: "Snake Plant", image: "snake_plant.jpg", description: "Hardy plant that can survive with minimal care." },
    { name: "Fiddle Leaf Fig", image: "fiddle_leaf_fig.jpg", description: "Trendy plant with large, fiddle-shaped leaves." },
    { name: "Spider Plant", image: "spider_plant.jpg", description: "Easy-to-grow plant that is great for beginners." }
  ];
  
  // Function to display user details
  function displayUserDetails() {
    document.getElementById("username").innerText += userData.username;
    document.getElementById("email").innerText += userData.email;
    document.getElementById("location").innerText += userData.location;
  }
  
  // Function to display plants
  function displayPlants() {
    const plantList = document.getElementById("plant-list");
    plantsData.forEach(plant => {
      const plantItem = document.createElement("div");
      plantItem.classList.add("plant-item");
  
      const image = document.createElement("img");
      image.src = plant.image;
      image.alt = plant.name;
  
      const name = document.createElement("h3");
      name.innerText = plant.name;
  
      const description = document.createElement("p");
      description.innerText = plant.description;
  
      plantItem.appendChild(image);
      plantItem.appendChild(name);
      plantItem.appendChild(description);
  
      plantList.appendChild(plantItem);
    });
  }
  
  // Call functions to display user details and plants
  displayUserDetails();
  displayPlants();
  
