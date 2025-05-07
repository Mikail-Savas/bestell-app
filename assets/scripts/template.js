function getRestaurantHeroTemplate(restaurant) {
  return `
    <div class="restaurant-banner">
        <img src="${restaurant.logoSrc}" alt="restaurant logo" class="restaurant-logo" />
    </div>
    `;
}

function getRestaurantInfoTemplate(restaurant) {
  const details = restaurant.details;
  return `
  <h1>${restaurant.name}</h1>
  <span>${restaurant.description}</span>
  <ul class="restaurant-details">
    <li class="restaurant-detail">${details.rating} Bewertung</li>
    <li class="restaurant-detail">${formatToCurrency(details.minimumOrderPrice)} Mindestbestellwert</li>
    <li class="restaurant-detail">${formatToCurrency(details.deliveryPrice)} Lieferkosten</li>
  </ul>
  `;
}