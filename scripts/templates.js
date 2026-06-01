
function getBurgerTemplate(indexMenus, indexBurgers){
    return /*html*/`
        <section class="menu_card">
                <img src=${menuList[indexMenus].burger[indexBurgers].image} alt="Burger Image">
                <div class="menu_text">
                    <h3>${menuList[indexMenus].burger[indexBurgers].name}</h3>
                    <p>${menuList[indexMenus].burger[indexBurgers].description}</p>
                </div>
                <div class="menu_price">
                    <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(menuList[indexMenus].burger[indexBurgers].price)}</p>
                    <button onclick="addMenuToBasket(${indexMenus}, ${indexBurgers}, 'burger')" id="button_to_basket_${indexMenus}_${indexBurgers}" class="add_basket_btn">Add to basket</button>
                </div>
        </section>
    `
}

function getPizzaTemplate(indexMenus, indexPizza){
    return /*html*/`
        <section class="menu_card">
                <img src=${menuList[indexMenus].pizza[indexPizza].image} alt="Pizza Image">
                <div class="menu_text">
                    <h3>${menuList[indexMenus].pizza[indexPizza].name}</h3>
                    <p>${menuList[indexMenus].pizza[indexPizza].description}</p>
                </div>
                <div class="menu_price">
                    <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(menuList[indexMenus].pizza[indexPizza].price)}</p>
                    <button onclick="addMenuToBasket(${indexMenus}, ${indexPizza}, 'pizza')" id="button_to_basket_${indexMenus}_${indexPizza}" class="add_basket_btn">Add to basket</button>
                </div>
        </section>
    `
}

function getSaladTemplate(indexMenus, indexSalad){
    return /*html*/`
        <section class="menu_card">
                <img src=${menuList[indexMenus].salad[indexSalad].image} alt="Salad Image">
                <div class="menu_text">
                    <h3>${menuList[indexMenus].salad[indexSalad].name}</h3>
                    <p>${menuList[indexMenus].salad[indexSalad].description}</p>
                </div>
                <div class="menu_price">
                    <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(menuList[indexMenus].salad[indexSalad].price)}</p>
                    <button onclick="addMenuToBasket(${indexMenus}, ${indexSalad}, 'salad')" id="button_to_basket_${indexMenus}_${indexSalad}" class="add_basket_btn">Add to basket</button>
                </div>
        </section>
    `
}

function getBasketTemplate(){
    return /*html*/`
   
        <section id="basket_card" class="basket_card_wrapper">
        </section>
        <table class="basket_table">
            <tr>
                <td class="table_left">Subtotal</td>
                <td class="table_right">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculateTotalPrice())}</td>
            </tr>
            <tr>
                <td class="table_left">Delivery fee</td>
                <td class="table_right">4,99€</td>
            </tr>
            <tr>
                <th class="table_left">Total</th>
                <th class="table_right">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculateTotalPrice()+4.99)}</th>
            </tr>
        </table>
        <button onclick="orderReceived()" class="buy_btn">Buy now (${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculateTotalPrice()+4.99)})</button>
    `
}

function getEmptyBasketTemplate(){
    return /*html*/`
        <p>Nothing here yet.</p>
        <p>Go ahead and choose something delicious!</p>
        <section class="basket_card_empty">
            <img class="empty_basket_img" src="./assets/icons/basket.png" alt="basket icon">
        </section> 
        `
}

function getBasketCardTemplate(basketIndex){
return /*html*/`
    <section class="basket_card" >
        <p>${basketList[basketIndex].amounts} x ${basketList[basketIndex].name}</p>
        <div class="basket_card_footer">
            <div class="basket_card_footer_left">
                <button onclick="deleteBasketMenu(${basketIndex})" class="button_img"><img src="./assets/icons/delete.png"alt="delete icon"></button>
                <button onclick="decreaseBasketMenu(${basketIndex})" class="add_btn">-</button>
                <p>${basketList[basketIndex].amounts}</p>
                <button onclick="increaseBasketMenu(${basketIndex})" class="add_btn">+</button>
            </div>
            <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(basketList[basketIndex].price)}</p>
        </div>
    </section>
`
}

function getOrderReceivedTemplate(){
    return /*html*/`
        <p>Order confirmed!</p>
        <p>Your food is on the way.</p>
        <section class="basket_card_empty">
            <img class="empty_basket_img" src="./assets/icons/ordered.png" alt="Delivery Car">
        </section> 
        `
}

// Dialog

function getDialogBasketTemplate(){
    return /*html*/`
        <header class="basket_dialog_header">
            <button onclick="closeDialogBasket()" class="buy_btn">X</button>
        </header>
        <section id="basket_card_dialog" class="basket_card_wrapper">
        </section>
        <table class="basket_table">
            <tr>
                <td class="table_left">Subtotal</td>
                <td class="table_right">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculateTotalPrice())}</td>
            </tr>
            <tr>
                <td class="table_left">Delivery fee</td>
                <td class="table_right">4,99€</td>
            </tr>
            <tr>
                <th class="table_left">Total</th>
                <th class="table_right">${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculateTotalPrice()+4.99)}</th>
            </tr>
        </table>
        <button onclick="orderDialogReceived()" class="buy_btn">Buy now (${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculateTotalPrice()+4.99)})</button>
    `
}

function getEmptyDialogBasketTemplate(){
    return /*html*/`
    <section class="basket_dialog">
        <header class="basket_dialog_header">
            <button onclick="closeDialogBasket()" class="buy_btn">X</button>
        </header>
        
        <p>Nothing here yet.</p>
        <p>Go ahead and choose something delicious!</p>
        <section class="basket_card_empty">
            <img class="empty_basket_img" src="./assets/icons/basket.png" alt="basket icon">
        </section> 
    </section>
    `
}

function getOrderDialogReceivedTemplate(){
    return /*html*/`
        <header class="basket_dialog_header">
            <button onclick="closeDialogBasket()" class="buy_btn">X</button>
        </header>
        <p>Order confirmed!</p>
        <p>Your food is on the way.</p>
        <section class="basket_card_empty">
            <img class="empty_basket_img" src="./assets/icons/ordered.png" alt="Delivery Car">
        </section> 
        `
}