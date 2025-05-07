const refs = {
  shoppingCart: document.getElementById("shopping-cart"),
};

const dishes = [
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
];

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
};

function init() {
  shoppingCart.items = getArrayFromLocalStorage('cartItems');
}

function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getArrayFromLocalStorage(key) {
  let result = localStorage.getItem(key);
  return result ? JSON.parse(result) : [];
}