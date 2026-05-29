
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
                    <button onclick="addMenuToBasket(${indexMenus}, ${indexBurgers}, 'burger')" class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
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
                    <button onclick="addMenuToBasket(${indexMenus}, ${indexPizza}, 'pizza')" class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
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
                    <button onclick="addMenuToBasket(${indexMenus}, ${indexSalad}, 'salad')" class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
                </div>
        </section>
    `
}

function getBasketTemplate(){
    return /*html*/`
      <section class="basket_card" id="basket_card">
            <!-- <p>0 x Platzhalter</p>
            <div class="basket_card_footer">
                <div class="basket_card_footer_left">
                    <button class="button_img"><img src="./assets/icons/delete.png"alt="delete icon"></button>
                    <p>1</p>
                    <button class="add_btn">+</button>
                </div>
                <p>00,00€</p>
            </div> -->
        </section>
        <table class="basket_table">
            <tr>
                <td class="table_left">Subtotal</td>
                <td class="table_right">00,00€</td>
            </tr>
            <tr>
                <td class="table_left">Delivery fee</td>
                <td class="table_right">4,99€</td>
            </tr>
            <tr>
                <th class="table_left">Total</th>
                <th class="table_right">00,00€</th>
            </tr>
        </table>
        <button class="buy_btn">Buy now (00,00€)</button>`
}

function getEmptyBasketTemplate(){
    return /*html*/`
        <section class="basket_card">
            <p>Your shopping cart is empty.</p>
        </section>
        `
}

function getBasketCardTemplate(index){
return /*html*/`
        <p>${basketList[index].amounts} x ${basketList[index].name}</p>
        <div class="basket_card_footer">
            <div class="basket_card_footer_left">
                <button class="button_img"><img src="./assets/icons/delete.png"alt="delete icon"></button>
                <p>${basketList[index].amounts}</p>
                <button class="add_btn">+</button>
            </div>
            <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(basketList[index].price)}</p>
        </div>
`
}