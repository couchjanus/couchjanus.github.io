
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (element) => `
<div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title.toUpperCase()}</h5>
                  
            <p class="card-text">${element.body}</p>
            <a href="#" class="card-link">Detail</a>
            <a href="#" class="card-link author" data-id="${element.userId}">Author link</a>
        </div>
    </div>
</div>
`;

const xhrPromise = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong!')
        }
    });
    return promise;

}

// console.log(xhrPromise('GET', url))

xhrPromise('GET', url)
.then(response => {
    const posts = JSON.parse(response)
    let result = '';
    posts.forEach(element => {
        result += template(element)
    });

    // console.log(result)
    document.getElementById('blog').innerHTML = result;
    // return ""
})
.then(() => {
    const users = document.querySelectorAll('.author');
    users.forEach(user => {
        xhrPromise('GET', `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
        .then(response => {
            let userName = JSON.parse(response)
            user.textContent = userName.name
        })
    })
})