import {ALL_PRODUCTS} from './constants.js';

function insertTableRows() {
    const typeToId = {
        "Cleanser": "table-cleanser",
        "Toner/Essence": "table-toner",
        "Treatment": "table-treatment",
        "Moisturizer": "table-moisturizer",
        "SPF/CC": "table-spf"
    };
    for (let type in typeToId) {
        const table = document.getElementById(typeToId[type]);
        const tableBody = table.children[1];
        const productsOfType = ALL_PRODUCTS.filter(product => product.type === type);
        const tableRowsHtml = productsOfType.map(product => `<tr>
            <td>${product.brand}</td>
            <td>${product.name}</td>
        </tr>`);
        tableBody.innerHTML = tableRowsHtml.join("");
    }
}

window.onload = insertTableRows;