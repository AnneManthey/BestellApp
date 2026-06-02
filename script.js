const basketRef = document.getElementById("basket");
const dialogBasketRef = document.getElementById("basket_dialog");

function init() {
    renderMenus();
    renderBasket();
    renderFooter();
}

function renderMenus() {
    for (let indexMenus = 0; indexMenus < menuList.length; indexMenus++) {
        if ("burger" in menuList[indexMenus]) {
            renderBurger(indexMenus);
        }
        else if ("pizza" in menuList[indexMenus]) {
            renderPizza(indexMenus)
        }
        else if ("salad" in menuList[indexMenus]) {
            renderSalad(indexMenus)
        }
    }
}

function renderBurger(indexMenus) {
    let categoryRef = document.getElementById("menu_burger");
    categoryRef.innerHTML = "";
    for (let indexBurgers = 0; indexBurgers < menuList[indexMenus].burger.length; indexBurgers++) {
        categoryRef.innerHTML += getBurgerTemplate(indexMenus, indexBurgers);
    }
}

function renderPizza(indexMenus) {
    categoryRef = document.getElementById("menu_pizza");
    categoryRef.innerHTML = "";
    for (let indexPizza = 0; indexPizza < menuList[indexMenus].pizza.length; indexPizza++) {
        categoryRef.innerHTML += getPizzaTemplate(indexMenus, indexPizza);
    }
}

function renderSalad(indexMenus) {
    categoryRef = document.getElementById("menu_salad");
    categoryRef.innerHTML = "";
    for (let indexSalad = 0; indexSalad < menuList[indexMenus].salad.length; indexSalad++) {
        categoryRef.innerHTML += getSaladTemplate(indexMenus, indexSalad);
    }
}

function renderBasket() {
    basketRef.innerHTML = "";
    dialogBasketRef.innerHTML = "";
    if (basketList.length > 0) {
        basketRef.innerHTML += getBasketTemplate();
        dialogBasketRef.innerHTML += getDialogBasketTemplate();
        renderBasketOrder();
        renderDialogBasketOrder();
    }
    else {
        basketRef.innerHTML += getEmptyBasketTemplate();
        dialogBasketRef.innerHTML += getEmptyDialogBasketTemplate();
    }
}

function renderBasketOrder() {
    const basketOrderRef = document.getElementById("basket_card");
    basketOrderRef.innerHTML = "";
    for (let index = 0; index < basketList.length; index++) {
        basketOrderRef.innerHTML += getBasketCardTemplate(index);
    }
}

function renderDialogBasketOrder() {
    const basketOrderRef = document.getElementById("basket_card_dialog");
    basketOrderRef.innerHTML = "";
    for (let index = 0; index < basketList.length; index++) {
        basketOrderRef.innerHTML += getBasketCardTemplate(index);
    }
}

function renderFooter() {
    const footerRef = document.getElementById("responsive_footer");
    footerRef.innerHTML = "";
    footerRef.innerHTML = getFooterTemplate();
}

function getMenuFromCard(indexMenus, indexItem, category) {         // returned Menu-object mit variablem Abgleich der category
    return menuList[indexMenus][category][indexItem];
}

function addMenuToBasket(indexMenus, indexItem, category) {
    let menuObject = getMenuFromCard(indexMenus, indexItem, category);
    let basketIndex = getBasketListIndex(menuObject);
    if (basketIndex == -1) {
        pushObjectToBasket(menuObject, indexMenus, indexItem);
    }
    else {
        increaseAmountInBasket(menuObject, basketIndex, indexMenus, indexItem);
    }
    renderBasket();
    renderFooter();
}

function pushObjectToBasket(menuObject, indexMenus, indexItem) {
    let newMenuObject = {
        "name": menuObject.name,
        "price": menuObject.price,
        "basePrice": menuObject.price,
        "amounts": 1,
        "menuIndex": indexMenus,
        "itemIndex": indexItem
    }
    basketList.push(newMenuObject);
    basketIndex = basketList.length - 1;
    switchAddButton(basketIndex, indexMenus, indexItem);
}

function increaseAmountInBasket(menuObject, basketIndex, indexMenus, indexItem) {
    basketList[basketIndex].amounts++;
    basketList[basketIndex].price = menuObject.price * basketList[basketIndex].amounts;
    switchAddButton(basketIndex, indexMenus, indexItem);
}

function switchAddButton(basketIndex, indexMenus, indexItem) {
    const buttonRef = document.getElementById(`button_to_basket_${indexMenus}_${indexItem}`);
    buttonRef.innerHTML = "Added " + basketList[basketIndex].amounts;
    buttonRef.style.backgroundColor = "rgba(231, 108, 31, 1)";
}

function getBasketListIndex(menuObject) {
    let i = basketList.findIndex(item => item.name === menuObject.name);  // Sucht im basket nach einem object, 
    if (i >= 0) {                                                         // dass genauso heißt wie das geklickte
        return i;
    }
    else {
        return "-1";
    }
}

function deleteBasketMenu(basketIndex) {
    let menu = basketList[basketIndex];
    let basketDelete = basketList.splice(basketIndex, 1);
    const buttonRef = document.getElementById(`button_to_basket_${menu.menuIndex}_${menu.itemIndex}`)
    buttonRef.innerHTML = "Add to basket";
    buttonRef.style.backgroundColor = "white";
    renderBasket();
}

function increaseBasketMenu(basketIndex) {
    let menu = basketList[basketIndex];
    menu.amounts++;
    menu.price = menu.basePrice * menu.amounts;
    const buttonRef = document.getElementById(`button_to_basket_${menu.menuIndex}_${menu.itemIndex}`)
    buttonRef.innerHTML = "Added " + menu.amounts;
    renderBasket();
}

function decreaseBasketMenu(basketIndex) {
    let menu = basketList[basketIndex];
    if (menu.amounts > 1) {
        menu.amounts--;
        menu.price = menu.basePrice * menu.amounts;
        const buttonRef = document.getElementById(`button_to_basket_${menu.menuIndex}_${menu.itemIndex}`)
        buttonRef.innerHTML = "Added " + menu.amounts;
    }
    else {
        deleteBasketMenu(basketIndex);
    }
    renderBasket();
}

function calculateTotalPrice() {
    let totalPrice = 0;
    for (let index = 0; index < basketList.length; index++) {
        totalPrice += basketList[index].price;
    }
    return totalPrice;
}

function orderReceived() {
    const basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";
    basketRef.innerHTML += getOrderReceivedTemplate();
    basketList.length = 0;
    renderMenus();
    renderFooter();
}

function orderDialogReceived() {
    const basketRef = document.getElementById("basket_dialog");
    basketRef.innerHTML = "";
    basketRef.innerHTML += getOrderDialogReceivedTemplate();
    basketList.length = 0;
    renderMenus();
    renderFooter();
}

function openDialogBasket() {
    dialogBasketRef.showModal();
    dialogBasketRef.innerHTML = "";
    if (basketList.length > 0) {
        dialogBasketRef.innerHTML += getDialogBasketTemplate();
        renderDialogBasketOrder();
    }
    else {
        dialogBasketRef.innerHTML += getEmptyDialogBasketTemplate();
    }
}

function closeDialogBasket() {
    event.stopPropagation();
    dialogBasketRef.close();
}




// To Do:


// Pfeile Kategorieleisten drehen
// CSS aufteilen/auslagern











