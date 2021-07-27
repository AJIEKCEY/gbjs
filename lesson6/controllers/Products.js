import Product from "../models/Product.js";
import Basket from "../models/Basket.js";
import Client from "../models/Client.js";


const client = new Client( 123544, 'Сергей')
let basket = new Basket(client, []);
let products = [];

for (let i = 1; i <= 10; i++){
    products.push(new Product(i,`Product ${ i }`, i * 10, `Some description for product ${ i }`,`https://picsum.photos/seed/${i}/150`));
}

const productWrapper = document.getElementById('products');

products.map( item => {
    productWrapper.insertAdjacentHTML('beforeend',item.template());
})

let buttons = document.getElementsByClassName('product_addToBasket');

for (let button of buttons){
    button.addEventListener('click', addToBasket);
}

function addToBasket(e){
    const basketWrapper = document.getElementById('basket');
    let productToAdd = products.find(product => product.id == e.target.dataset.id);
    basket.addToBasket(productToAdd);
    basketWrapper.innerHTML = basket.template();
    //console.log(basket.getCountBasketPrice());
}

