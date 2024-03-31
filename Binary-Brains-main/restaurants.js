'use strict';

const restaurants = [
  { name: 'The Italian Kitchen', rating: '⭐⭐⭐⭐⭐', imageUrl: 'images/italian-kitchen.jpg' },
  { name: 'Sushi Express', rating: '⭐⭐⭐⭐', imageUrl: 'images/sushi-express.jpg' },
  { name: 'Curry Up Now', rating: '⭐⭐⭐⭐', imageUrl: 'images/curry-up-now.jpg' },
  { name: 'The Great Steak', rating: '⭐⭐⭐⭐', imageUrl: 'images/great-steak.jpg' },
  { name: 'Pancake World', rating: '⭐⭐⭐', imageUrl: 'images/pancake-world.jpg' }
];

const container = document.getElementById('restaurants-container');

function validateImagePath(path) {
  return path;
}

function handleRestaurantClick(restaurantName) {
  // Redirect to res.html with restaurantName as a query parameter
  window.location.href = `fivePage.html?restaurant=${restaurantName}`;
}

restaurants.forEach(restaurant => {
  const html = `
    <div class="restaurant-item" onclick="handleRestaurantClick('${restaurant.name}')">
      <img class="restaurant-image" src="${validateImagePath(restaurant.imageUrl)}" alt="${restaurant.name}">
      <div class="restaurant-details">
        <div class="restaurant-name">${restaurant.name}</div>
        <div class="restaurant-rating">${restaurant.rating}</div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
});
