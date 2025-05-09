const refs = {
  restaurantHero: document.getElementById("restaurant-hero"),
  restaurantInfo: document.getElementById("restaurant-info"),
  restaurantMenu: document.getElementById("restaurant-menu"),
  shoppingCart: document.getElementById("shopping-cart"),
  shoppingCartFooter: document.querySelector('.cart-footer'),
  sidebar: document.querySelector('.sidebar-content'),
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
      name: "Bruschetta",
      price: 5.8,
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
  renderMenu: function () {
    render(this.dishes, refs.restaurantMenu, getMenuDishTemplate);
  },
  renderHero: () =>
    renderTemplate(refs.restaurantHero, getRestaurantHeroTemplate(restaurant)),
  renderInfo: () =>
    renderTemplate(refs.restaurantInfo, getRestaurantInfoTemplate(restaurant)),
};

const shoppingCart = {
  restaurant: restaurant,
  items: [],
  isEmpty: function () {
    return this.items.length == 0;
  },
  hasItem: function (item) {
    return this.getItem(item) != undefined;
  },
  addItem: function (item) {
    if (!this.hasItem(item)) {
      item.quantity = 1;
      this.items.push(item);
    } else {
      this.increaseQuantity(item);
    }
  },
  /**
   * requires hasItem(item);
   */
  removeItem: function (item) {
    if (item.quantity == 1) {
      let index = this.getIndex(item);
      this.items.splice(index, 1);
    } else {
      this.decreaseQuantity(item);
    }
  },
  decreaseQuantity: function (item) {
    this.getItem(item).quantity -= 1;
  },
  increaseQuantity: function (item) {
    this.getItem(item).quantity += 1;
  },
  getItem: function (item) {
    return this.items.find((_item) => _item.id == item.id);
  },
  getIndex: function (item) {
    return this.items.findIndex((_item) => _item.id == item.id);
  },
  clear: function () {
    this.items = [];
  },
  getSubtotalPrice: function () {
    return this.items.reduce((subTotal, item) => subTotal += item.price * item.quantity, 0);
  },
  getTotalPrice: function () {
    return this.getSubtotalPrice() + this.restaurant.details.deliveryPrice;
  },
  render: function () {
    if(this.isEmpty()){
      document.querySelector('.empty.sidebar-content').classList.remove('d-none');
      document.querySelector('.filled.sidebar-content').classList.add('d-none');
    } else{
      document.querySelector('.empty.sidebar-content').classList.add('d-none');
      document.querySelector('.filled.sidebar-content').classList.remove('d-none');
    }
    this.renderCart();
    this.renderFooter();
  },
  renderEmpty: function () {
    renderTemplate(document.querySelector('.empty.sidebar-content'), getEmptyShoppingCartTemplate());
  },
  renderCart: function () {
    render(this.items, refs.shoppingCart, getShoppingCartItemTemplate);
  },
  renderFooter: function () {
    refs.shoppingCartFooter.innerHTML = '';
    renderTemplate(refs.shoppingCartFooter, getShoppingCartFooterTemplate(shoppingCart));
  }
};

const sidebar = {
  updateHeight: function (height) {
    refs.sidebar.style.height = height + 'px';
  },
  synchronize: function () {
    const header = document.querySelector('header');
    const mainSection = document.querySelector('.main-section');
    let newHeight = window.innerHeight;
    if (window.pageYOffset <= header.clientHeight) {
      newHeight -= (header.clientHeight - window.pageYOffset);
    } else if (window.pageYOffset + window.innerHeight >= header.clientHeight + mainSection.clientHeight) {
      newHeight -= (window.pageYOffset + window.innerHeight) - (header.clientHeight + mainSection.clientHeight);
    }
    sidebar.updateHeight(newHeight.toFixed(0));
  }
}

function init() {
  shoppingCart.items = getArrayFromLocalStorage("cartItems");
  restaurant.render();
  shoppingCart.renderEmpty();
  shoppingCart.render();
  synchronizeSidebar();
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
  result = result.replace(".", ",");
  return result.concat(" €");
}
