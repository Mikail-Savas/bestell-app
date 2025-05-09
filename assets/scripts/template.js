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
    <li class="restaurant-detail">${formatToCurrency(
      details.minimumOrderPrice
    )} Mindestbestellwert</li>
    <li class="restaurant-detail">${formatToCurrency(
      details.deliveryPrice
    )} Lieferkosten</li>
  </ul>
  `;
}

function getMenuDishTemplate(dish) {
  return `
  <div class="dish-container">
    <div class="dish-info">
      <h3 class="dish-name">${dish.name}</h3>
      <p class="dish-price">${formatToCurrency(dish.price)}</p>
    </div>
    <div class="dish-image-wrapper">
      <img
        src="../assets/img/restaurant-menu/dish-${dish.id}.jpg"
        alt="dish image"
        class="dish-image"
      />
      <button class="add-dish-button" onclick="addDishToShoppingCart(${dish.id})">${getAddIconHTML()}</button>
    </div>
  </div>
  `;
}

function getAddIconHTML() {
  return '<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" > <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" /> </svg>';
}

function getEmptyShoppingCartTemplate() {
  return `
  <img
    src="assets/img/basket.svg"
    alt="basket image"
    class="basket-image"
  />
  <h2>Fülle deinen Warenkorb</h2>
  <div> Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</div>
  `;
}