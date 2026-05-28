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
                    <button class="button_img"><img src="./assets/icons/button Add.png"alt="Add to Basket"></button>
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
