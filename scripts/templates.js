function getBurgerTemplate(index){
    return /*html*/`
        <section class="menu_card">
                <img src=${menuList[0].burger[index].image} alt="Burger Image">
                <div class="menu_text">
                    <h3>${menuList[0].burger[index].name}</h3>
                    <p>${menuList[0].burger[index].description}</p>
                </div>
                <div class="menu_price">
                    <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(menuList[0].burger[index].price)}</p>
                    <button onclick="addBurgerToBasket(${index})" class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
                </div>
        </section>
    `
}

function getPizzaTemplate(index){
    return /*html*/`
        <section class="menu_card">
                <img src=${menuList[1].pizza[index].image} alt="Pizza Image">
                <div class="menu_text">
                    <h3>${menuList[1].pizza[index].name}</h3>
                    <p>${menuList[1].pizza[index].description}</p>
                </div>
                <div class="menu_price">
                    <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(menuList[1].pizza[index].price)}</p>
                    <button class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
                </div>
        </section>
    `
}

function getSaladTemplate(index){
    return /*html*/`
        <section class="menu_card">
                <img src=${menuList[2].salad[index].image} alt="Salad Image">
                <div class="menu_text">
                    <h3>${menuList[2].salad[index].name}</h3>
                    <p>${menuList[2].salad[index].description}</p>
                </div>
                <div class="menu_price">
                    <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(menuList[2].salad[index].price)}</p>
                    <button class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
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
            <div class="basket_card_footer">
                <div class="basket_card_footer_left">
                    <button class="button_img"><img src="./assets/icons/delete.png"alt="delete icon"></button>
                    <p>1</p>
                    <button class="add_btn">+</button>
                </div>
                <p>00,00€</p>
            </div>
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

function getBasketCardTemplate(index){
return /*html*/`
        <p>${basketList[index].name}</p>
        <div class="basket_card_footer">
            <div class="basket_card_footer_left">
                <button class="button_img"><img src="./assets/icons/delete.png"alt="delete icon"></button>
                <p>1</p>
                <button class="add_btn">+</button>
            </div>
            <p>${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(basketList[index].price)}</p>
        </div>
`
}