function addDishToShoppingCart(dishId) {
    const dish = restaurant.dishes.find(dish => dish.id == dishId);
    shoppingCart.addItem(dish);
    shoppingCart.render();
    saveToLocalStorage('cartItems', shoppingCart.items);
}

function removeDishFromShoppingCart(dishId) {
    const dish = shoppingCart.items.find(item => item.id == dishId);
    shoppingCart.removeItem(dish);
    shoppingCart.render();
    saveToLocalStorage('cartItems', shoppingCart.items);
}

function submitOrder() {
    console.table(shoppingCart.items);
    shoppingCart.clear();
    shoppingCart.render();
    saveToLocalStorage('cartItems', shoppingCart.items);
    alert('Vielen Dank für deine Bestellung! Deine Bestellung liegt in der Konsole.')
}