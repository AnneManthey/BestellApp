function init(){
    renderBurger();
    renderPizza();
    renderSalad();
}

function renderBurger(){
    const burgerRef = document.getElementById("menu_burger");
    burgerRef.innerHTML = "";
    for (let index = 0; index < menuList[0].burger.length; index ++){
        burgerRef.innerHTML += getBurgerTemplate(index);
    }
}

function renderPizza(){
    const pizzaRef = document.getElementById("menu_pizza");
    pizzaRef.innerHTML = "";
    for (let index = 0; index < menuList[1].pizza.length; index ++){
        pizzaRef.innerHTML += getPizzaTemplate(index);
}}

function renderSalad(){
    const saladRef = document.getElementById("menu_salad");
    saladRef.innerHTML = "";
    for (let index = 0; index < menuList[2].salad.length; index ++){
        saladRef.innerHTML += getSaladTemplate(index);
}}



// To Do:



// JSON Arrays erstellen
// Init Function & Templates rendern
// Basket logik 
// Basket rendern
// Message Danke für Bestellung

// Responsive Basket / Footer
// Responsive Media
// Imprint & Cookies