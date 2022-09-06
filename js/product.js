// JavaScript 1 - Module 1
// Lesson Task 3

// product.html links to product.js. Display each property of the object in product.js using HTML.
// Provide a default value for the price property if it is missing.
// If the product is on sale, underline the name.
// Change the properties in the object to test your code.

const product = {
    name: "Fancy Product",
    //price: 90,
    onSale: false,
};

const container = document.querySelector(".container");

let priceDetails = "Unknown price";
if (product.price) {
    priceDetails = product.price;
}

let isOnSaleStyle = "";
let isOnSaleText = "Not on sale";

if (product.onSale === true) {
    isOnSaleStyle = "underline";
    isOnSaleText = "Is on sale!";
}

container.innerHTML = `
<div class="product">
                <h1 style="text-decoration: ${isOnSaleStyle}">${product.name}</h1>
                <p>${priceDetails}</p>
                <p>${isOnSaleText}</p>
            </div>
`;

//"
