const shoppingCart = {
    restaurant: restaurant,
    items: [],
    isEmpty: isEmpty,
    hasItem: hasItem,
    addItem: addItem,
    removeItem: removeItem,
    decreaseQuantity: decreaseQuantity,
    increaseQuantity: increaseQuantity,
    getItem: getItem,
    getIndex: getIndex,
    clear: clear,
    getSubtotalPrice: getSubtotalPrice,
    getTotalPrice: getTotalPrice,
    render: function () {
        if (this.isEmpty()) {
            document.querySelector('.empty.sidebar-content').classList.remove('d-none');
            document.querySelector('.filled.sidebar-content').classList.add('d-none');
        } else {
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
    toast('Bestellung erfolgreich abgeschickt! Vielen Dank für deinen Einkauf.');
    console.table(shoppingCart.items);
    shoppingCart.clear();
    shoppingCart.render();
    saveToLocalStorage('cartItems', shoppingCart.items);
}

/* shopping cart interface */

function isEmpty() {
    return this.items.length == 0;
}

function hasItem(item) {
    return this.getItem(item) != undefined;
}

function addItem(item) {
    if (!this.hasItem(item)) {
        item.quantity = 1;
        this.items.push(item);
    } else {
        this.increaseQuantity(item);
    }
}

/**
* requires hasItem(item);
*/
function removeItem(item) {
    if (item.quantity == 1) {
        let index = this.getIndex(item);
        this.items.splice(index, 1);
    } else {
        this.decreaseQuantity(item);
    }
}

function decreaseQuantity(item) {
    this.getItem(item).quantity -= 1;
}

function increaseQuantity(item) {
    this.getItem(item).quantity += 1;
}

function getItem(item) {
    return this.items.find((_item) => _item.id == item.id);
}

function getIndex(item) {
    return this.items.findIndex((_item) => _item.id == item.id);
}

function clear() {
    this.items = [];
}

function getSubtotalPrice() {
    return this.items.reduce((subTotal, item) => subTotal += item.price * item.quantity, 0);
}

function getTotalPrice() {
    return this.getSubtotalPrice() + this.restaurant.details.deliveryPrice;
}