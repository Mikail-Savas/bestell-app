function addDishToShoppingCart(dishId) {
    const dish = restaurant.dishes.find(dish => dish.id == dishId);
    shoppingCart.addItem(dish);
    shoppingCart.render();
}