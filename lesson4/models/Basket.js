class Basket {
    constructor(client, products) {
        this.client = client;
        this.products = products;
    }

    getCountBasketPrice(){
        return this.products.reduce((total,item) => total + item.price, 0);
    }
}

export default Basket;
