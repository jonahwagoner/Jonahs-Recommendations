import {ALL_PRODUCTS} from './constants.js';

function insertProductHtml() {
    const path = window.location.pathname;
    const productsForPage = ALL_PRODUCTS.filter(product => path.includes(product.concern));

    const listItemHtml = productsForPage.map(product => `<li>
        <div class="product">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name"> ${product.name}</div>
            <div class="product-link"> ${product.link}</div>
        </div>
        <div class="product-description">
            <h3>Key Ingredients</h3>
            ${product.ingredients}
        </div>
    </li>`
    );

    const ulProductList = document.getElementById("product-list");
    ulProductList.innerHTML = listItemHtml.join("");

}

window.onload = insertProductHtml;