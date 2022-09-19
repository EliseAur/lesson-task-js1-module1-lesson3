// JavaScript 1 - Module 1
// Lesson Task 3

// The index.html file links to products.js.
//Loop through the array in products.js and display each object using HTML.
// Provide a default value for the price property if it is missing.
// If the product is sold out, display its name in red otherwise display it in green.
// Change the properties in the objects in the array to test your code.

const products = [
    {
        name: "Fancy shit",
        price: 40,
        soldOut: false,
    },
    {
        name: "Another Product",
        soldOut: true,
    },
    {
        name: "Cheap Product",
        price: 10,
        soldOut: false,
    },
];

const container = document.querySelector(".container");

console.log(container);

let html = "";

const textStyle = "bold";

for (let i = 0; i < products.length; i++) {
    let isSoldOut = "In stock";
    let productColor = "green";

    if (products[i].soldOut) {
        isSoldOut = "Sold out";
        productColor = "red";
    }

    let priceInfo = "Unknown price";
    if (products[i].price) {
        priceInfo = products[i].price;
    }

    let inStockColor = "green";
    if (products[i].soldOut) {
        inStockColor = "red";
    }

    html += `<div class="products" style="border-color: ${productColor}">
                <h2 style="color: ${productColor}">${products[i].name}</h2>
                <p><span style="font-weight: ${textStyle}">Price</span>: ${priceInfo}</p>
                <p style="color: ${inStockColor}">${isSoldOut}</p>
            </div>`;

    console.log(html);
}

container.innerHTML = html;
