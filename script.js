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

// Basket Functions


function getBurgerFromCard(index) {
    const nameFromCard = menuList[0].burger[index].name;
    return nameFromCard;
}

function getBasketListIndex(){
    let i = basketList.indexOf(getBurgerFromCard());
    if (i != null){
        return i;
    }
    else{
        return "-1";
    }
}


function addBurgerToBasket(index) {
    let basketIndex = getBasketListIndex(getBurgerFromCard(index))
    if (basketIndex === -1) {
        let burgerObject = {
            "name": menuList[0].burger[index].name,
            "price": menuList[0].burger[index].price,
            "amounts": 1
        }
        basketList.push(burgerObject);
    }
    else{
        let amount = getBasketListIndex(getBurgerFromCard(index))
        basketList[basketIndex].amounts++;
    }
    
    


}




// To Do:

// function addToBasket
// function für calculate total (basket)
// funtion delete (basket)
// function +1 (basket)

// button img switch (menu)


// Responsive Basket / Footer
// Responsive Media
// Imprint & Cookies

// Optional:
// render-functions zusammenlegen