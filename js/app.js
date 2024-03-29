"use strict";

const currency = (total) => parseFloat(Math.round(total * 100) / 100).toFixed(2);

const compare = (key, order='acs') => (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    
    const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    comparison = (A > B) ? 1 : -1;
    return (order === 'desc') ? -comparison : comparison;
}

const findByProps = function(items, props, what) {
    let founds = [];
    items.find((item, i) => {
        if (item[props] === what) {
            founds.push(items[i]);
        }            
    })
    return founds;
}

const sortingOrders = [
    {key:"default", value: "Default sorting"}, 
    {key:"popularity", value:"Popularity Products"}, 
    {key:"low-high", value:"Low to High Price"}, 
    {key:"high-low", value:"High to Low Price"}
];

function Product(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
}


function CardProduct(item) {
    
    this.item = item;
   
    const detailTemplate = (item) =>  `
    <div class="detail-container">
        <div class="col-left">
            <img src="${item.image}">
        </div>
        <div class="col-right">
            <div class="info-container">
                <h2 class="info-header">${item.name}</h2>

                <div class="info-price">Price: <span class="price">${item.price}</span></div>
                <div class="info-shipping">Free shipping</div>
                
                <div class="info-button to-cart" data-id="${item.id}">
                    <a href="#!" class="btn btn-submit add-to-cart"><i class="fas fa-cart-plus"></i> Add to Cart</a>
                </div>

                <h2 class="qty-header py-2">Amount:</h2>     
                    
                <div class="qty qty-buttons">
                    <div class="number-input quantity" data-id="${item.id}">
                        <button class="btn btn-dec">-</button>
                        <input class="quantity-result"
                                        type="number" 
                                        value="1"
                                        min="1"
                                        max="10"
                                        required 
                                        />
                        <button class="btn btn-inc">+</button>
                    </div>
                </div>

                <div class="info-description">${item.description}</div>
                <div class="info-link">
                <a class="btn-link far fa-heart add-to-wishlist" href="#!" data-id="${item.id}">&nbsp;Add to wish list</a>
                </div>
            </div>    
        
        </div>
      </div>
    `;
    
    const showButton = this.item.querySelector(".show-details");
    const dialog = document.querySelector("dialog");
    const closeButton = dialog.querySelector("dialog .close");
    let dialogMain = dialog.querySelector("dialog .dialog-main");
    
    
    showButton.addEventListener("click", event => {
        let parent = event.target.closest('.product');
        let id = parent.dataset.id;
        dialogMain.innerHTML = detailTemplate(productList.getProductById(id))
        dialog.showModal();
    });
    
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    const addToCartButton = this.item.querySelector('.add-to-cart');

    addToCartButton.addEventListener('click', this);
    
    this.handleEvent = function(event) {
        let parent = event.target.closest('.product');
        let id = parent.dataset.id;
        let product = productList.getProductById(id);
        product = {...product, amount: 1};
        shoppingCart.addItemToCart(product);
        document.getElementById('cart-amount').textContent = shoppingCart.totalAmount();
    } 
}

function Cart(tax = 0.07, shipping = 0) {
    console.log("Cart constructor", this);
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
    // 
    this.addItemToCart = function(product) {

        let inCart = cart.some(item => item.id === product.id);

        if (inCart){
            let index = cart.findIndex(item => item.id === product.id);
            cart[index].amount += product.amount;
        }else{
            let item = new Item(product.id, product.price, product.amount);
            cart.push(item);
        }
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


const starsTemplate = (n) => Array(n).fill('&starf;').concat(Array(5 - n).fill('&star;')).join('');

function ProductList(products) {
    
    this.products = products;

    this.productTemplate = (product) => `
        <article class="product" data-id="${product.id}">
            <div class="icons">
                <a href="#!" class="fas fa-shopping-cart add-to-cart"></a>
                <a href="#!" class="fas fa-heart add-to-wishlist"></a>
                <a href="#!" class="fas fa-eye show-details"></a>
            </div>
            <div class="image">
                <div class="badge bg-${product.badge.bg}">${product.badge.title}</div>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="content" data-id="${product.id}">
                <h3 class="product-name">${product.name}</h3>
                <span><span class="price"></span><span class="price product-price">${product.price}</span></span> <span class="starf">${starsTemplate(product.stars)}</span>
            </div>                    
        </article>`;

    this.populateProductList = function (products) {
        let content = "";
        products.forEach(item => content += this.productTemplate(item))
        return content;
    }

    this.getProductById = (id) => this.products.find(item => item.id == id);
}

const liElement = (item) => `<li><a class="category-item" href="#!" data-id="${item.id}">${item.name}</a></li>`;

const ulElement = items => {
    let ul = document.createElement('ul');
    ul.setAttribute('class', "list-unstyled categories text-muted");

    let res = '';
    for (let item of items) {
        res += liElement(item);
    }
    ul.innerHTML = res;
    return ul;
}

const distinctSections = items => {
    let mapped = [...items.map(item => item.section)];
    let unique = [...new Set(mapped)];
    return unique;
}


function categoriesCollation(distinct, categories) {
    let result = [];
    let i = 0;
    for (let section of distinct) {
        result[i] = categories.filter(item => item.section === section);
        i++;
    }
    return result;
}

let sectionName = section => {
    let div = document.createElement('div');
    div.setAttribute('class', 'py-2 px-4 bg-dark text-white mb-1');
    div.innerHTML = `<strong class="text-uppercase">${section}</strong>`;
    return div;
}

const populateCategories = (categoryContainer, categories) => {
    let distinct = distinctSections(categories);
    let collation = categoriesCollation(distinct, categories);
    for (let i=0; i<distinct.length; i++) {
        categoryContainer.append(sectionName(distinct[i]));
        categoryContainer.append(ulElement(collation[i]));
    }

}


function renderCategory(productContainer, selector, products) {
    const categoryItems = document.querySelectorAll(selector);

    categoryItems.forEach(item => item.addEventListener('click', e => {
        e.preventDefault();

        if (e.target.classList.contains('category-item')) {
            const category = e.target.dataset.id;
            const categoryFilter = items => items.filter(item => item.category == category);
            productContainer.innerHTML = productList.populateProductList(categoryFilter(products));
        } else {
            productContainer.innerHTML = productList.populateProductList(products);
        }

        let productCards = productContainer.querySelectorAll('.product');
        productCards.forEach(item => new CardProduct(item));

    }))
}

const sortingOptions = () => sortingOrders.map(item => `<option value="${item.key}">${item.value}</option>`).join('');

function renderSelect(selectPicker, products, productContainer) {
    selectPicker.innerHTML = sortingOptions();

    selectPicker.addEventListener('change', function() {
        switch(this.value) {
            case 'low-high':
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('price', 'asc')))
                break;
            case 'high-low':
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('price', 'desc')))
                break;
            case 'popularity':
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('stars', 'desc')))
                break;

            default:
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('id', 'asc')))
            
        }
        let productCards = productContainer.querySelectorAll('.product');
        productCards.forEach(item => new CardProduct(item));

    });
}



let shoppingCart =  new Cart();
let productList = new ProductList(products);

function main() {
    const productContainer = document.querySelector('.product-container');

    productContainer.innerHTML = productList.populateProductList(products);	

    let productCards = productContainer.querySelectorAll('.product');

    productCards.forEach(item => new CardProduct(item));

    const sidebar = document.getElementById('sidebar');

    if (sidebar) {
        const categoryContainer = document.getElementById('category-container');
        populateCategories(categoryContainer, categories);

        renderCategory(productContainer, '#category-container', products)

    }

    const selectPicker = document.getElementById('selectpicker');
    if (selectPicker) {
        renderSelect(selectPicker, products, productContainer);
    }


}

const template = document.createElement('template');

template.innerHTML = `
<footer class="mb-3">
        <div class="container page-footer">
            <section class="footer-main">
                <div class="footer-main-item">
                    <h3 class="footer-title">About</h3>
                    <ul>
                        <li><a href="">Services</a></li>
                        <li><a href="">Profiles</a></li>
                        <li><a href="">Priceas</a></li>
                        <li><a href="">Customers</a></li>
                        <li><a href="./exercises/index.html">Exercises</a></li>
                    </ul>
                </div>
                <div class="footer-main-item">
                    <h3 class="footer-title">Resources</h3>
                    <ul>
                        <li><a href="">Docs</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">eBooks</a></li>
                        <li><a href="">Webinars</a></li>
                    </ul>
                </div>
                <div class="footer-main-item">
                    <h3 class="footer-title">Contact</h3>
                    <ul>
                        <li><a href="">Help</a></li>
                        <li><a href="">Sales</a></li>
                        <li><a href="">Advertise</a></li>
                    </ul>
                </div>
            </section>

            <section class="footer-social py-3">
                <ul class="footer-social-list">
                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                    <li><a href=""><i class="fab fa-github"></i></a></li>
                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube"></i></a></li>
                </ul>
            </section>
           
            <section class="footer-ligal">
                <ul class="footer-ligal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">&copy; 2024 Copyright Shopaholic Inc.</a></li>
                </ul>
                
            </section>
        </div>
    </footer>
`;

let clone = template.content.cloneNode(true);
document.body.appendChild(clone)

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}