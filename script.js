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

function renderBasket(index) {                          // index undefined? from addbasket lastseen/verloren
    const basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";
    if (basketList.length > 0) {
        basketRef.innerHTML += getBasketTemplate(index);
        renderBasketOrder();
    }

    else {
        basketRef.innerHTML += getEmptyBasketTemplate();
    }
}

function renderBasketOrder() {
    const basketOrderRef = document.getElementById("basket_card");
    basketOrderRef.innerHTML = "";

        for (let index = 0; index < basketList.length; index++) {
            basketOrderRef.innerHTML += getBasketCardTemplate(index);
        }
    
}

function getBurgerFromCard(index) {
    const objectFromCard = menuList[0].burger[index];
    return objectFromCard;
}


function addBurgerToBasket(index) {
    let menuObject = getBurgerFromCard(index);
    let basketIndex = getBasketListIndex(menuObject);
    if (basketIndex == -1) {                                
        let burgerObject = {                                // ggf. direkt durch object ersetzen? dann kann ggf. unten
            "name": menuList[0].burger[index].name,         // die index-function wieder mit indexOf funtionieren? 
            "price": menuList[0].burger[index].price,
            "amounts": 1
        }
        basketList.push(burgerObject);
    }
    else {
        let amount = getBasketListIndex(getBurgerFromCard(index))
        basketList[basketIndex].amounts++;
    }
    renderBasket();
}



function getBasketListIndex(menuObject) {
    let i = basketList.findIndex(item => item.name === menuObject.name);
    if (i >= 0) {
        return i;
    }
    else {
        return "-1";
    }
}
//     let i = basketList.indexOf(menuObject);


// To Do:


// function für calculate total (basket)
// funtion delete (basket)
// function +1 (basket)

//function für add pizza+salad hinzufügen

// button img switch (menu)


// Responsive Basket / Footer
// Responsive Media
// Imprint & Cookies

// Optional:
// render-functions zusammenlegen