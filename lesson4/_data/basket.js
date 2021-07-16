import Basket from "../models/Basket.js";
import Client from "../models/Client.js";
import Product from "../models/Product.js";


let client = new Client(1,'Sergei');
let products = []


for (let i = 1; i <= 10; i++){
    products.push(new Product(i,`Product ${ i }`, i * 10, `Some description for product ${ i }`));
}

let basket = new Basket(client,products);

export default basket;