const dialogBasketRef = document.getElementById("basket_dialog");

function init() {
    renderMenus();
    renderBasket();
    renderFooter();
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
            categoryRef = document.getElementById("menu_pizza");
            categoryRef.innerHTML = "";
            for (let indexPizza = 0; indexPizza < menuList[indexMenus].pizza.length; indexPizza++) {
                categoryRef.innerHTML += getPizzaTemplate(indexMenus, indexPizza);
            }
        }
        else if ("salad" in menuList[indexMenus]) {
            categoryRef = document.getElementById("menu_salad");
            categoryRef.innerHTML = "";
            for (let indexSalad = 0; indexSalad < menuList[indexMenus].salad.length; indexSalad++) {
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

function renderDialogBasketOrder() {
    const basketOrderRef = document.getElementById("basket_card_dialog");
    basketOrderRef.innerHTML = "";

    for (let index = 0; index < basketList.length; index++) {
        basketOrderRef.innerHTML += getBasketCardTemplate(index);
    }
}

function renderFooter(){
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
    else {
        basketList[basketIndex].amounts++;
        basketList[basketIndex].price = menuObject.price * basketList[basketIndex].amounts;
        switchAddButton(basketIndex, indexMenus, indexItem);
    }
    renderBasket();
    renderFooter();
    
}

function switchAddButton(basketIndex, indexMenus, indexItem) {
        const buttonRef = document.getElementById(`button_to_basket_${indexMenus}_${indexItem}`);
        buttonRef.innerHTML = "Added " + basketList[basketIndex].amounts;
        buttonRef.style.backgroundColor = "rgba(231, 108, 31, 1)";
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
}

function orderDialogReceived() {
    const basketRef = document.getElementById("basket_dialog");
    basketRef.innerHTML = "";
    basketRef.innerHTML += getOrderDialogReceivedTemplate();
    basketList.length = 0;

    renderMenus();
}



// Dialog Basket


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



// responsive footer orderzahl fixen
// Optional: Preis mit/ohne Lieferkosten berechnen (if/else bei über 50€ warenwert)

// CSS Dialog Basket fixen
// Pfeile Kategorieleisten drehen


// Imprint & Cookies








