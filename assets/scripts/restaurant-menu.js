function addDishToShoppingCart(dishId) {
    const dish = restaurant.dishes.find(dish => dish.id == dishId);
    shoppingCart.addItem(dish);
    console.table(shoppingCart.items);
    shoppingCart.render();
}