// console.dir(document.body)
// console.dir(document.title)

// console.dir(document.body.childElementCount)

// console.dir(document.body.firstElementChild)
// console.dir(document.body.lastElementChild)

// console.dir(document.body.firstChild)

// console.dir(document.body.childNodes)

// console.dir(document.body.children)

// for (const child of document.body.children) {
//     console.dir(child)
// }

// section

console.dir(document.getElementById('hero'))
const hero = document.getElementById('hero');

let h1 = hero.querySelector('h1');
// console.dir(h1)
// h1 = hero.getElementsByTagName('h1')
// console.log(h1[0].innerText)

// h1[0].innerText = "Hello h1"

h1.innerText = "Hello element h1"


// h1.style.color = "white"
// h1.style.backgroundColor = "blue" // background-color

// float - cssFloat
// h1.style.cssText = "color:red; font: 600 2.5rem/1.7; padding:1.5rem 2rem; text-align:center;  background-color: gold;"


// hero.innerHTML = "<h1>Hero Section</h1>"
// document.body.innerHTML = "<h1>Hello world</h1>"

// h1.className = "test-css"

h1.classList.add("test-css", 'test-css2')

h1.classList.toggle("test-css")
h1.classList.toggle("test-css")

// let imgs = document.getElementsByClassName('image')

let imgs = document.querySelectorAll('.image img')
console.log(imgs[0])

imgs[0].setAttribute('src', '/images/product-5.jpg')

imgs[3].setAttribute('src', '/images/product-4.jpg')