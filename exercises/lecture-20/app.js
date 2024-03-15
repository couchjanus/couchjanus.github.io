// app.js
"use strict";


const contacts = {
    address: {
        icon: "fas fa-globe-europe",
        street: "1/2 New Street",
        city: "Kyiv",
        zip: "001 001",
        country: "Ukraine",
        info() {
            return `
            <li class="mb-2"><a href="/contacts.html"> <i class="${this.icon}"></i>"> <span>${this.zip}, ${this.street}, ${this.city}, ${this.country} </span></a></li>
            `;
        }
    },

    callCenter: {
        icon: "fas fa-phone",
        phone: "+038 123 345 6789",
        info() {
            return `
            <li class="mb-2"><a href="tel:${this.phone}"> <i class="${this.icon}"></i>"> <span>${this.phone}: This number is toll free if calling from ${contacts.address.country}, otherwise we advise You to use the electronic form of communication. </span></a></li>
            `; 
        }

    },
    support: {
        icon: "far fa-envelop",
        email: "info@mt.com",
        info() {
            return `
            <li class="mb-2"><a href="mailto:${this.email}"> <i class="${this.icon}"></i>"> <span>Please feel free to write on email to ${this.email}, or to use our electronic ticketing system. </span></a></li>
            `; 
        }
    }
};

console.dir(contacts);

console.log(contacts.address.info());
console.log(contacts.support.info());
console.log(contacts.callCenter.info());

console.dir(Object.keys(contacts));
console.dir(Object.values(contacts));
console.dir(Object.entries(contacts));

const product = {
    id: 1,
    name: "Air Pads" ,
    price: 11,
    description: "Product description",
    cover: "product-1.jpg",
    badge: {
        title: "Sale",
        color: 'white',
        bg: 'red'
    },
    stars: 4,
    category_id: 1,
    brand_id: 2,
};


function createProduct(id, name, price) {
    const obj = {};
    obj.id = id;
    obj.name = name;
    obj.price = price;
    return obj;  
}

const product1 = createProduct(1, 'Product 1 name', 12);
const product2 = createProduct(2, 'Product 2 name', 22);

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

const currency = total => parseFloat(Math.round(total * 100) / 100).toFixed(2); 

const product3 = new Product(3, 'Product 3 name', 31);
const product4 = new Product(4, 'Product 4 name', 21);

function cartItem(item, tax = 0.07, shipping = 0) {
    this.item = item;
    this.tax = tax;
    this.shipping = shipping;
    this.total = function() {
        // return parseFloat(Math.round(this.item.price * this.item.amount * 100) / 100).toFixed(2);
        return currency((this.item.price * this.item.amount)*(1 + this.tax) + this.shipping);
    }

}

let productItem = {...product3, amount: 4};
let cart = new cartItem(productItem);
console.dir(cart);
console.log(cart.total());

