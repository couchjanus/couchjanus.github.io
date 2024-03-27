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

        // for (let item in cart) {
        //     if(cart[item].id === product.id) {
        //         cart[item].amount += product.amount;
        //         this.saveCart();
        //         return;
        //     }
        // }

        let inCart = cart.some(item => item.id == product.id);
        console.log(inCart)

        if(inCart) {
            let index = cart.find(item => item.id == product.id);
            cart[index].amount += product.amount;
        } else {
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
        let id = parent.dataset.id;
        let product = productList.getProductById(products, id);

        // let price = parent.querySelector('.product-price').innerText
        // let name = parent.querySelector('.product-name').innerText
        // let id = parent.querySelector('.content').getAttribute('id');
        // console.log(id, price, name)

        // let product = new Product(id, name, price)
        product = {...product, amount: 1}

        // console.log(product)
        shoppingCart.addItemToCart(product);
        document.getElementById('cart-amount').textContent=shoppingCart.totalAmount();
        
        // console.log(shoppingCart.totalAmount())
        // console.log(shoppingCart.totalInCart())

    });

    const showButton = this.item.querySelector(".show-detail");
    const dialog = document.querySelector("dialog");
    const closeButton = dialog.querySelector("dialog .close");
    let dialogMain = dialog.querySelector("dialog .detail-content");

    const detailTemplate = item => `
    <div class="detail-container">
            <div class="col-left">
                <img src="${item.image}">
            </div>
            <div class="col-right">
                <div class="info-container">
                    <h2 class="info-header">${item.name}</h2>
    
                    <div class="info-price">Price: <span class="price">${item.price}</span></div>
                    <div class="info-shipping">Free shipping</div>
                    
                    <div class="info-button to-cart" data-id="1">
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
                    <a class="btn-link far fa-heart add-to-wishlist" href="#!" data-id="1">&nbsp;Add to wish list</a>
                    </div>
                </div>    
            
            </div>
          </div>
    `;
    
    
    showButton.addEventListener("click", event => {
        let parent = event.target.closest('.product');
        let id = parent.dataset.id;
        // console.log(id)
        // console.log(productList.getProductById(+id))

        dialogMain.innerHTML = detailTemplate(productList.getProductById(+id))
        dialog.showModal();
    });
    
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

}


// let addToCartButtons = productContainer.querySelectorAll('.add-to-cart');

// for (const item of addToCartButtons) {
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
// }

const starsTemplate = (n) => Array(n).fill('&starf;').concat(Array(5 - n).fill('&star;')).join('');

function ProductList(products) {
    this.products = products
    this.productTemplate = (product) => `
    <article class="product" data-id="${product.id}">
        <div class="icons">
            <a href="#!" class="fas fa-shopping-cart add-to-cart"></a>
            <a href="#!" class="fas fa-heart add-to-wishlist"></a>
            <a href="#!" class="fas fa-eye show-detail"></a>
        </div>
        <div class="image">
            <div class="badge bg-${product.badge.bg}">${product.badge.title}</div>
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="content" data-id="${product.id}">
            <h3 class="product-name">${product.name}</h3>
            <span><span>${starsTemplate(product.stars)}</span><span class="price product-price">${product.price}</span></span>
        </div>
                    
    </article>
    `;

    this.populateProductList = function(products) {
        let content = '';
        products.forEach(item => content += this.productTemplate(item))
        return content;
    }

    this.getProductById = id => this.products.find(item => item.id === id);
}

let productList = new ProductList(products);



function main() {
    const productContainer = document.querySelector('.product-container');
    console.log(products)
    productContainer.innerHTML = productList.populateProductList(products);

    let productCards = productContainer.querySelectorAll('.product');

    productCards.forEach(item => new CardProduct(item));

    // let products = [];
    // productCards.forEach(function(item) {
    //     let id = item.querySelector('.content').getAttribute('id');
    //     let name = item.querySelector('.product-name').textContent;
    //     let price = item.querySelector('.product-price').textContent;
    //     let action = item.querySelector('.badge').textContent;

    //     products = [...products, {id:+id, name:name, price:+price, action:action}];
    // })

    // console.log(products)

    // const findByProps = function(items, props, what) {
    //     let result = [];
    //     items.find((item, index) => {
    //         if (item[props] === what) {
    //             result.push(items[index]);
    //         }
    //     })
    //     return result;
    // }
    // console.log(findByProps(products, "action", 'New'))

    // const compare = (key, order='asc') => (a, b) => {
    //     if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    //     const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    //     const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    //     let comparison = 0;
    //     comparison = (A > B) ? 1 : -1;
    //     return (order === 'desc') ? -comparison : comparison;
    // }


    // let sorted = products.sort(compare('id', 'desc')) // 'desc'
    // console.log(sorted)
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