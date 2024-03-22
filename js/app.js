"use strict";

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

const currency = total => parseFloat(Math.round(total * 100) / 100).toFixed(2); 

function Cart(tax = 0.07, shipping = 0) {
   
    this.tax = tax;
    this.shipping = shipping;


    let cart = [];

    this.saveCart = function() {
        console.log(cart);
    }

    function Item (id, price, amount) {
        this.id = id;
        this.price = price;
        this.amount = amount;
    }
    
    this.addItemToCart = function(product) {

        for (let item in cart) {
            if(cart[item].id === product.id) {
                cart[item].amount += product.amount;
                this.saveCart();
                return;
            }
        }

        let item = new Item(product.id, product.price, product.amount);
        cart.push(item);
        this.saveCart();
    }

    this.setCountForItem = function(id, amount) {
        for (let i in cart) {
            if(cart[i].id === id) {
                cart[i].amount = amount;
            }
        }
    }

    this.totalAmount = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].amount;
        }
        return total;
    }

    this.totalInCart = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].price * cart[item].amount;
        }
        return currency(total*(1 + this.tax) + this.shipping);
    }

    this.removeItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart[item].amount--;
                if (cart[item].amount === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        this.saveCart();
    }

    this.removeAllItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        this.saveCart();
    }

    this.clearCart = function() {
        cart = [];
        this.saveCart();
    }

}

const productContainer = document.querySelector('.product-container');

// let addToCart = productContainer.querySelector('.add-to-cart');
// let showDetail = productContainer.querySelector('.show-detail');
// // console.dir(addToCart)
// addToCart.addEventListener('click', () => {
//     console.dir(addToCart)
// })
// const dialog = document.getElementById('detail');
// showDetail.addEventListener('click', () => {
//     // console.dir(showDetail)
//     dialog.showModal();
// })

// dialog.querySelector('.close').addEventListener('click', () => {
//     dialog.close();
// })

let shoppingCart = new Cart();

function CardProduct(item) {
    this.item = item;

    let addToCart = this.item.querySelector('.add-to-cart');
    addToCart.addEventListener('click', function(event) {
        // console.log(event.target)

        let parent = event.target.closest('.product');

        let price = parent.querySelector('.product-price').innerText
        let name = parent.querySelector('.product-name').innerText
        let id = parent.querySelector('.content').getAttribute('id');
        console.log(id, price, name)

        let product = new Product(id, name, price)
        product = {...product, amount: 1}

        console.log(product)
        shoppingCart.addItemToCart(product);

        console.log(shoppingCart.totalAmount())
        console.log(shoppingCart.totalInCart())

    });

}
let productCards = productContainer.querySelectorAll('.product');
for (const item of productCards) {
    new CardProduct(item);
}

// let addToCartButtons = productContainer.querySelectorAll('.add-to-cart');

// for (const item of addToCartButtons) {
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
// }

function main() {

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}