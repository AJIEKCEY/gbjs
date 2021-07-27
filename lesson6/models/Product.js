class Product {
    constructor(id, name, price, description, picture) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.picture = picture;
    }

    //todo вынести шаблоны во view
    template(){
        return `
        <section class="product_SmallCard">
            <div class="product_picture"><img src="${this.picture}" alt=""></div>
            <div class="product_name">${this.name}</div>
            <div class="product_description">${this.description}</div>
            <div class="product_price">${this.price}</div>
            <button class="product_addToBasket" data-id="${this.id}">Добавить в корзину</button>
        </section>
        `
    }
}

export default Product;