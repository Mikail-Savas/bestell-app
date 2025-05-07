const refs = {
  shoppingCart: document.getElementById("shopping-cart"),
  restaurantHero: document.getElementById("restaurant-hero"),
  restaurantInfo: document.getElementById("restaurant-info"),
};

const restaurant = {
  name: "La Bella Tavola",
  description:
    "Ein gemütliches italienisches Restaurant mit einer breiten Auswahl an authentischen Gerichten und einer warmen Atmosphäre.",
  logoSrc: "../assets/img/logo/restaurant-logo.png",
  bannerSrc: "../assets/img/restaurant-banner.jpg",
  details: {
    rating: 4.5,
    minimumOrderPrice: 20,
    deliveryPrice: 3.5,
  },
  dishes: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 8.99,
    },
    {
      id: 2,
      name: "Pizza Quattro Stagioni",
      price: 12.5,
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      price: 11.0,
    },
    {
      id: 4,
      name: "Lasagne alla Bolognese",
      price: 13.25,
    },
    {
      id: 5,
      name: "Tiramisu",
      price: 6.75,
    },
  ],
  render: function () {
    this.renderHero();
    this.renderInfo();
    this.renderMenu();
  },
  renderMenu: function () {},
  renderHero: () =>
    renderTemplate(refs.restaurantHero, getRestaurantHeroTemplate(restaurant)),
  renderInfo: () =>
    renderTemplate(refs.restaurantInfo, getRestaurantInfoTemplate(restaurant))
};

const shoppingCart = {
  items: [],
  isEmpty: function () {
    return this.items.length == 0;
  },
  hasItem: function (item) {},
  addItem: function (item) {},
  removeItem: function (item) {},
  getTotalPrice: function () {},
  clear: function () {
    this.items = [];
  },
  render: function () {},
};

function init() {
  shoppingCart.items = getArrayFromLocalStorage("cartItems");
  restaurant.render();
}

function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getArrayFromLocalStorage(key) {
  let result = localStorage.getItem(key);
  return result ? JSON.parse(result) : [];
}

/**
 * Format a number in EUR currency style.
 * E.g. 4.73 -> "4,73"
 * @param {Number} price The number to format
 * @returns {String} Formatted price string in EUR.
 */
function formatToCurrency(price) {
  let result = price.toFixed(2);
  result.replace('.', ',');
  return result.concat(' €');S
}