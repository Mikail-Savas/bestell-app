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
    toast('Bestellung erfolgreich abgeschickt! Vielen Dank für deinen Einkauf. Mehr Info in der Konsole.');
    console.table(shoppingCart.items);
    shoppingCart.clear();
    shoppingCart.render();
    saveToLocalStorage('cartItems', shoppingCart.items);
}