function init() {
    renderBurger();
    renderPizza();
    renderSalad();
    renderBasket();
}

function renderBurger() {
    const burgerRef = document.getElementById("menu_burger");
    burgerRef.innerHTML = "";
    for (let index = 0; index < menuList[0].burger.length; index++) {
        burgerRef.innerHTML += getBurgerTemplate(index);
    }
}

function renderPizza() {
    const pizzaRef = document.getElementById("menu_pizza");
    pizzaRef.innerHTML = "";
    for (let index = 0; index < menuList[1].pizza.length; index++) {
        pizzaRef.innerHTML += getPizzaTemplate(index);
    }
}

function renderSalad() {
    const saladRef = document.getElementById("menu_salad");
    saladRef.innerHTML = "";
    for (let index = 0; index < menuList[2].salad.length; index++) {
        saladRef.innerHTML += getSaladTemplate(index);
    }
}

function renderBasket() {
    const basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";
    if (basketList.length != null) {
        basketRef.innerHTML += getEmptyBasketTemplate();
    }
    else {
        for (let index = 0; index < basketList.length; index++) {
            basketRef.innerHTML += getBasketTemplate(index);
        }
    }

}




// To Do:


// Basket logik
// Button onclick, push in Basket array
// Message Danke für Bestellung

// Responsive Basket / Footer
// Responsive Media
// Imprint & Cookies