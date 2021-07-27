class Basket {
    constructor(client, products) {
        this.client = client;
        this._products = products;
    }

    template() {
        return `
        <section>
            <div class="basket_products">${this.renderProducts()}</div>
            <div class="basket_count">${this.getCountBasketPrice()}</div>
            <button class="product_addToBasket" data-clientId="${this.client.id}">Оформить заказ</button>
        </section>
        `
    }

    getCountBasketPrice(){
        return this._products.reduce((total,item) => total + item.price * item.amount, 0);
    }

    addToBasket(product){
        let productIsInBasket = this._products.find( item => item.id === product.id);

        if (productIsInBasket){
            productIsInBasket.amount++;
        } else {
            product.amount = 1;
            this._products.push(product);
        }
    }

    removeFromBasket(product){
        //this._products = this._products.find( item => item.id !== product.id);
    }

    renderProducts(){
        return this._products.reduce((colleсtion, product) => colleсtion + `
            <div class="basket_product" data-id="${product.id}">${product.name} - ${product.amount} <span>Удалить</span></div>
        `, '');

    }
}

export default Basket;
