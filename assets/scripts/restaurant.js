const restaurant = {
  name: "La Bella Tavola",
  description:
    "Ein gemütliches italienisches Restaurant mit einer breiten Auswahl an authentischen Gerichten und einer warmen Atmosphäre.",
  logoSrc: "assets/img/logo/restaurant-logo.png",
  bannerSrc: "assets/img/restaurant-banner.jpg",
  details: {
    rating: 4.5,
    minimumOrderPrice: 20,
    deliveryPrice: 3.5,
  },
  dishes: getDishes(),
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