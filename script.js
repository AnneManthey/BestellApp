function init() {
    renderMenus()
    renderBasket();
}

function renderMenus() {
    let categoryRef = document.getElementById("menu_burger");
    categoryRef.innerHTML = "";
    for (let indexMenus = 0; indexMenus < menuList.length; indexMenus++) {
        if ("burger" in menuList[indexMenus]) {
            for (let indexBurgers = 0; indexBurgers < menuList[indexMenus].burger.length; indexBurgers++) {
                categoryRef.innerHTML += getBurgerTemplate(indexMenus, indexBurgers);
            }
        }
        else if ("pizza" in menuList[indexMenus]) {
            for (let indexPizza = 0; indexPizza < menuList[indexMenus].pizza.length; indexPizza++) {
                categoryRef = document.getElementById("menu_pizza");
                categoryRef.innerHTML += getPizzaTemplate(indexMenus, indexPizza);
            }
        }
        else if ("salad" in menuList[indexMenus]) {
            for (let indexSalad = 0; indexSalad < menuList[indexMenus].salad.length; indexSalad++) {
                categoryRef = document.getElementById("menu_salad");
                categoryRef.innerHTML += getSaladTemplate(indexMenus, indexSalad);
            }
        }
    }
}


function renderBasket() {                        
    const basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";
    if (basketList.length > 0) {
        basketRef.innerHTML += getBasketTemplate();
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


// Basket-functions:

function getMenuFromCard(indexMenus, indexItem, category){
   //return menuList[indexMenus].category[indexItem];
   return menuList[indexMenus][category][indexItem];
}

function addMenuToBasket(indexMenus, indexItem, category){
    let menuObject = getMenuFromCard (indexMenus, indexItem, category);
    let basketIndex = getBasketListIndex(menuObject);
    if(basketIndex == -1){
        let newObject ={
            "name": menuObject.name,
            "price": menuObject.price,
            "amounts":1
        }
         basketList.push(newObject);
    }
    else{
        basketList[basketIndex].amounts++;
        basketList[basketIndex].price = menuObject.price * basketList[basketIndex].amounts;
    }
    renderBasket();

}









// function getBurgerFromCard(indexMenus, indexBurgers) {
//     const objectFromCard = menuList[indexMenus].burger[indexBurgers];
//     return objectFromCard;
// }


// function addBurgerToBasket(indexMenus, indexBurgers) {
//     let menuObject = getBurgerFromCard(indexMenus, indexBurgers);
//     let basketIndex = getBasketListIndex(menuObject);
//     if (basketIndex == -1) {
//         let burgerObject = {                                // ggf. direkt durch object ersetzen? dann kann ggf. unten
//             "name": menuList[indexMenus].burger[indexBurgers].name,         // die index-function wieder mit indexOf funtionieren? 
//             "price": menuList[indexMenus].burger[indexBurgers].price,
//             "amounts": 1
//         }
//         basketList.push(burgerObject);
//     }
//     else {
//         basketList[basketIndex].amounts++;
//         basketList[basketIndex].price = (basketList[basketIndex].price) * (basketList[basketIndex].amounts);
//     }
//     renderBasket();
// }

// function getPizzaFromCard(indexMenus, indexPizza) {
//     const objectFromCard = menuList[indexMenus].pizza[indexPizza];
//     return objectFromCard;
// }

// function addPizzaToBasket(indexMenus, indexPizza) {
//     let menuObject = getPizzaFromCard(indexMenus, indexPizza);
//     let basketIndex = getBasketListIndex(menuObject);
//     if (basketIndex == -1) {
//         let pizzaObject = {                                // ggf. direkt durch object ersetzen? dann kann ggf. unten
//             "name": menuList[indexMenus].pizza[indexPizza].name,         // die index-function wieder mit indexOf funtionieren? 
//             "price": menuList[indexMenus].pizza[indexPizza].price,
//             "amounts": 1
//         }
//         basketList.push(pizzaObject);
//     }
//     else {
//         basketList[basketIndex].amounts++;
//         basketList[basketIndex].price = (basketList[basketIndex].price) * (basketList[basketIndex].amounts);
//     }
//     renderBasket();
// }

// function getSaladFromCard(indexMenus, indexSalad) {
//     const objectFromCard = menuList[indexMenus].salad[indexSalad];
//     return objectFromCard;
// }

// function addSaladToBasket(indexMenus, indexSalad) {
//     let menuObject = getSaladFromCard(indexMenus, indexSalad);
//     let basketIndex = getBasketListIndex(menuObject);
//     if (basketIndex == -1) {
//         let saladObject = {                                // ggf. direkt durch object ersetzen? dann kann ggf. unten
//             "name": menuList[indexMenus].salad[indexSalad].name,         // die index-function wieder mit indexOf funtionieren? 
//             "price": menuList[indexMenus].salad[indexSalad].price,
//             "amounts": 1
//         }
//         basketList.push(saladObject);
//     }
//     else {
//         basketList[basketIndex].amounts++;
//         basketList[basketIndex].price = (basketList[basketIndex].price) * (basketList[basketIndex].amounts);
//     }
//     renderBasket();
// }












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
// render-functions zusammenlegen, kategorie zu array hinzufügen und über if/else entsprechend rendern?