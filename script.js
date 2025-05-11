const refs = {
  restaurantHero: document.getElementById("restaurant-hero"),
  restaurantInfo: document.getElementById("restaurant-info"),
  restaurantMenu: document.getElementById("restaurant-menu"),
  shoppingCart: document.getElementById("shopping-cart"),
  shoppingCartFooter: document.querySelector('.cart-footer'),
  sidebar: document.querySelector('aside.sidebar')
};

function init() {
  applyResponsiveDesign();
  sidebar.synchronize();
  shoppingCart.items = getArrayFromLocalStorage("cartItems");
  restaurant.render();
  shoppingCart.renderEmpty();
  shoppingCart.render();
}